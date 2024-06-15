const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
title:String,
description:String,
price:Number,
owner:String
});


module.exports = mongoose.model("Product", productSchema);
