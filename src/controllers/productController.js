const Product = require("../model/productModel");
const User = require("../model/userModel");

exports.createProduct = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const owner = req.body.owner;

    // first check to get all data, if any data part is missing then it will not further
    if (!title || !description || !price || !owner) {
      return res.status(400).json({
        message: "Missing the deatils , please fill all the details",
      });
    }

    const user = await User.findById(owner);
    if (!user) {
      return res.status(400).json({
        message: "User not found on this Id",
      });
    }

    const data = {
      title,
      description,
      price,
      owner,
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
    const id = req.query.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        message: "User not found on this Id",
      });
    }

    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};
