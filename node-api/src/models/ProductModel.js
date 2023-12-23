const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = Schema({
    productName: {type: String, required:true},
    productPrice: {type: Number, required:true},
    productType: {type: String, required:true}
});





module.exports = mongoose.model("Product", ProductSchema);






