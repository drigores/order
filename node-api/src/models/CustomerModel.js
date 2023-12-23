const mongoose = require('mongoose');
const { Schema } = mongoose;


let Customer = new Schema({
    customerName:{type: String, required: true},
    address: {type: String},
    phoneNumber: String,
});

module.exports = mongoose.model('Customer', Customer);


