const jwt= require("jsonwebtoken");
const Product = require("../model/productModel");
const User = require("../model/userModel");

exports.createProduct = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

   

    // first check to get all data, if any data part is missing then it will not further
    if (!title || !description || !price ) {
      return res.status(400).json({
        message: "Missing the deatils , please fill all the details",
      });
    }



    const data = {
      title,
      description,
      price,
    };

    const product = await Product.create(data);
    res.status(200).json({
      product,
    });


  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

// this will be a get request so you cannot pass the body:  params query
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

exports.updateAProduct = async (req, res) => {
  try {
    // these two things will be taken from user to perform any action
    const { id } = req.params; // this will be the parameter ID we will find the product from this
    const { title, description, price } = req.body; // this will be the data which we will edit

    const newProduct = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
      },
      { new: true }
    );

    res.status(200).json({ newProduct });
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // this will be the parameter ID we will find the product from this
    await Product.findOneAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};
