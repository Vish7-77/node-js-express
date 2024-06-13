const express = require("express");
const { createProduct, getAllProducts, getASpecificProduct } = require("../controllers/productController");

const router = express.Router();

//
router.post("/product", createProduct);
//getting all the products
router.get("/allproducts", getAllProducts);
//give the id of your product after /getaproduct and then it will repose you i the product data
router.get("/getaproduct/:id", getASpecificProduct);

//update //delete




module.exports = router;
