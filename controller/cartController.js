const { Product } = require("../Admin/models/Product");
const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { name, quantity } = req.body;
    const userId = req.user.id;

    try {
        // Check if productId and quantity are provided
        if (!name || !quantity) {
            return res.status(400).json({ message: 'Missing required fields (product name, quantity)' });
        }

        // Find the product by name
        const product = await Product.findOne({ name: name });

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Calculate total price
        const totalPrice = product.price * quantity;

        // Find the user's cart
        let cart = await Cart.findOne({ user: userId });

        // If cart doesn't exist, create a new one
        if (!cart) {
            cart = new Cart({
                user: userId,
                products: [{ product: product.id, quantity: quantity }], // Use product._id as the product identifier
                totalPrice: totalPrice
            });
        } else {
            // user already has a cart, check product is already in the cart
            const existingProductIndex = cart.products.findIndex(item => item.product === product.id);


            if (existingProductIndex !== -1) {
                // If the product is already in the cart, update the quantity
                cart.products[existingProductIndex].quantity += quantity;
            } else {
                // If the product is not in the cart, add it to the cart
                cart.products.push({ product: product.id, quantity: quantity });
            }

            // Update total price
            cart.totalPrice += totalPrice;
        }

        // Save the cart
        await cart.save();

        // Respond with success message and updated cart
        res.status(201).json({ message: 'Product added to cart successfully', cart });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
