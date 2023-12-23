var { buildSchema } = require("graphql");


var schema = buildSchema(
    `type Query {
      customer: [Customer]
      order: [Order]
      product:[Product]
    }

    type Product {
        _id: String!
        productName: String!
        productPrice: Float!
        productType: String!
    }

    type Order {
        _id: String!
        customerId: String!
        productOrder: [ProductOrderSchema]
        orderDate: String!
    }

    type ProductOrderSchema {
        productId: String!
        unityPrice:  Float!
        amount: Int!
    }
    
    type Customer {
        _id: String!
        customerName: String!
        address: String!
        phoneNumber: String!
    }

    input CustomerInput {
        customerName: String!
        address: String!
        phoneNumber: String!
    }

    type Mutation{
        createCustomer(customer: CustomerInput): Customer!
    }   
    `);
module.exports = schema;