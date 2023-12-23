const customerController = require("../controllers/customerController");
const CustomerModel = require("../models/CustomerModel");
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");

const rootResolver = {
    customer: async (request)=> {
        console.log('customers');
        const customers = await CustomerModel.find({});
        return customers;
   },
   order: async (request)=> {
    console.log('orders');
    const orderList = await OrderModel.find({});
    return orderList;
},
    product: async (request)=> {
    console.log('product');
    const product = await ProductModel.find({});
    return product;
},
    createCustomer: async({customer},req)=>{
        console.log("customer Mutation");
        const customerModel = await customerController.insert(customer);
        return customerModel;

    }

 }


 module.exports = rootResolver;