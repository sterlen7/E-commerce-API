const { Product } = require('../Admin/models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.searchProduct = async (req, res) => {
    try {
        const { name } = req.body;

        const product = await Product.findOne({ name });

        if (product) {
            return res.status(200).json(product);
        } else {
            
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
       
        console.error('Error searching for product:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};