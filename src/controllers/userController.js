const userModal = require("../model/userModal");

exports.createUserId = async (req, res) => {
  const { id } = req.params; // taking the data
  const newUserId = await userModal.create({ id }); // creating the data in database
  res.send("this is the respose from server: with id" + id); // return the response
};

exports.getALlIds = async (req, res) => {
  const ids = await userModal.find();
  res.send(ids);
};
