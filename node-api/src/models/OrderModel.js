const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductOrderSchema = Schema({
    productId: {type: String, required:true},
    unityPrice:  {type: Number, required:true},
    amount: {type: Number, required:true},
});
const Order = new Schema({
    customerId: {type: String, required: true},
    productOrder: [ProductOrderSchema],
    orderDate: { type: Date, required: true},

});

module.exports = mongoose.model("Order", Order)

