
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: { type: String,  required: true},
    description: { type: String, required: true  },
    price: {type: Number,required: true },
    size:{type:String,required:true},
    color:{type:String, required:true}   
},{
    timestamps:true
});

exports.Product = mongoose.model('Product', productSchema);


