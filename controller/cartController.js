const { Product } = require("../Admin/models/Product");
const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { name, quantity } = req.body;
    const userId = req.user.id;

    try {
    
        if (!name || !quantity) {
            return res.status(400).json({ message: 'Missing required fields (product name, quantity)' });
        }


        const product = await Product.findOne({ name: name });

 
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

       
        const totalPrice = product.price * quantity;

      
        let cart = await Cart.findOne({ user: userId });

      
        if (!cart) {
            cart = new Cart({
                user: userId,
                products: [{ product: product.id, quantity: quantity }], 
                totalPrice: totalPrice
            });
        } else {

            const existingProductIndex = cart.products.findIndex(item => item.product === product.id);


            if (existingProductIndex !== -1) {
               
                cart.products[existingProductIndex].quantity += quantity;
            } else {
             
                cart.products.push({ product: product.id, quantity: quantity });
            }

          
            cart.totalPrice += totalPrice;
        }

       
        await cart.save();

        
        res.status(201).json({ message: 'Product added to cart successfully', cart });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
