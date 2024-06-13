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

exports.getAllProducts = async (req, res) => {
  // this line o 16 has to talk to database and get the data -- thats a time taking prpcess
  const allProducts = await productModel.find();
  res.status(200).json(allProducts);
};

exports.getASpecificProduct = async (req, res) => {
  //params -- body -- query
  // if you send data in body that will be always a post request
  //params your request type can be anything

  const id = req.params.id;
  const product = await productModel.findById(id);
  res.status(200).json(product);
};
