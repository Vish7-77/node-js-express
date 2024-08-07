const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateAProduct,
  deleteProduct,
} = require("../controllers/productController");
const { authMiddleware } = require("../middlewares/auth");
const router = express.Router();

// CRUD operations for PRODUCT
router.post("/create/product",authMiddleware, createProduct);
router.get("/products",authMiddleware, getAllProducts);

// the put route which can edit the existing record
router.put("/product/edit/:id", updateAProduct);

// the delete will delete the existing record or a specific product
router.delete("/product/delete/:id", deleteProduct);

module.exports = router;
