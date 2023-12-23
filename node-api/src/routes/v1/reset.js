var express = require("express");
const CustomerModel = require("../../models/CustomerModel");
const {OrderModel} = require("../../models/OrderModel");
const ProductModel = require("../../models/ProductModel");
var router = express.Router();


router.get('/', async (req, res) => {
    await CustomerModel.deleteMany({});
    await OrderModel.deleteMany({});
    await ProductModel.deleteMany({});
    const customer = new CustomerModel({
        customerId: "1",
        customerName: "Test",
        address:"address test",
        phoneNumber:"5512345678901"
    });
    const product = new ProductModel({
        productName: "Test Product",
        productPrice: 100.00,
        productType:"Food"
    });
    const product2 = new ProductModel({
        productName: "Test Product 2",
        productPrice: 200.00,
        productType:"Food"
    });
    const order = new OrderModel({
        orderID: "1",
        customerId: customer._id,
        productOrder:[{
            productId: product._id,
            unityPrice: product.productPrice,
            amount:30
        },
        {
            productId: product2._id,
            unityPrice: product2.productPrice,
            amount:15
        }],
        orderDate: new Date()
    });
    await customer.save();
    console.log('customer Added');
    await product.save();
    console.log('product Added');
    await product2.save();
    console.log('product2 Added');
    await order.save();
    console.log('order Added');

    res.send('Database Resetd, mocks inserteds');
})


module.exports = router;