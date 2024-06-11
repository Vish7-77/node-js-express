const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discount: String,
});

module.exports = mongoose.model("Product", productModel);
