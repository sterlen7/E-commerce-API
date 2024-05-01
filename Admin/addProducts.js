const { Product } = require('../Admin/models/Product');

exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, size, color } = req.body;
        
       
        const newProduct = new Product({
            name,
            description,
            price,
            size,
            color
        });

        const createdProduct = await newProduct.save();
        
        res.status(201).json(createdProduct);


        console.log('Product Added')
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
