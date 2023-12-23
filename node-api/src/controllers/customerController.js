const CustomerModel = require("../models/CustomerModel");


const customerController = {
    
    async insert(customerInput){
        const customerModel = new CustomerModel(customerInput);
        await customerModel.save();
        return customerModel;
    }
};
module.exports = customerController;