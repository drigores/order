const express = require("express");
const ProductModel = require("../../models/ProductModel");
const router = express.Router();

/* GET home page. */
router.get("/", async function(req, res) {
	console.log(`products/all`);
	const products = await ProductModel.find({});
	res.send(products);
});

router.get("/:id", async function(req, res) {
	console.log(`ID: ${req.params.id}`);
	const product = await ProductModel.findById(req.params.id);
	res.send(product);
});

module.exports = router;