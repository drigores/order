const express = require('express');
const mongoose = require('mongoose');
const resetRouter = require('./src/routes/v1/reset');
const customersRouter = require('./src/routes/v1/customer');
const productsRouter = require('./src/routes/v1/product');
const orderRouter = require('./src/routes/v1/order');
const { graphqlHTTP } = require("express-graphql");
const schema = require('./src/graphql/schema');
const rootResolver = require('./src/graphql/resolvers');
const amqpConnection = require('./src/amqp/producer');
const amqpConnectionConsumer = require('./src/amqp/consumer');

const app = express();
const port = 8081;
const mongodbIP= '127.0.0.1';
const mongodbName= 'test';

mongoose.connect(`mongodb://${mongodbIP}:27017/${mongodbName}`);


app.use(express.json());
app.use('/reset/', resetRouter);
app.use('/customers/', customersRouter);
app.use('/products/', productsRouter);
app.use('/orders/', orderRouter);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
)

// amqpConnectionConsumer();

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})