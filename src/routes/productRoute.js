const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");
const router = express.Router();

router.post("/create/product", createProduct);
router.get("/products", getAllProducts);



module.exports = router;
