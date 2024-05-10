
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin:{type:Boolean,default:false} ,
    banned:{type:Boolean,default:false} ,
    address:{type:String,required:true}
},
{
timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;