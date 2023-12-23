const express = require("express");
const router = express.Router();
const CustomerModel = require("../../models/CustomerModel");
const customerController = require("../../controllers/customerController");

/* GET home page. */
router.get("/", async function(req, res) {
	console.log(`customers/all`);
	const customers = await CustomerModel.find({});
	res.send(customers);
});

router.get("/:id", async function(req, res) {
	console.log(`ID: ${req.params.id}`);
	const customer = await CustomerModel.findById(req.params.id);
	res.send(customer);
});


router.post("/", async function(req, res) {
	const customer = await customerController.insert(req.body);
	res.send(customer);
});

router.delete("/:id", async function(req, res) {
	console.log(`ID Delete: ${req.params.id}`);
	await CustomerModel.deleteOne({_id:req.params.id});
	res.status(200);
	res.send();
});

module.exports = router;