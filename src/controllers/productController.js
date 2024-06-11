const productModel = require("../model/productModel");

exports.createProduct = async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
  };
  const newData = await productModel.create(data);
  res.status(200).json({ newData });
};
