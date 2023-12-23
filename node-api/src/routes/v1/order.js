const express = require("express");
const router = express.Router();
const OrderModel = require("../../models/OrderModel");

/* GET home page. */
router.get("/", async function(req, res) {
	console.log(`OrderM/all`);
	const orderList = await OrderModel.find({});
	res.send(orderList);
});

// router.get("/:id", async function(req, res) {
// 	console.log(`ID: ${req.params.id}`);
// 	const customer = await CustomerModel.findById(req.params.id);
// 	res.send(customer);
// });


// router.post("/", async function(req, res) {
// 	const customer = new CustomerModel(req.body);
// 	await customer.save();
// 	res.send(customer);
// });

// router.delete("/:id", async function(req, res) {
// 	console.log(`ID Delete: ${req.params.id}`);
// 	await CustomerModel.deleteOne({_id:req.params.id});
// 	res.status(200);
// 	res.send();
// });

module.exports = router;