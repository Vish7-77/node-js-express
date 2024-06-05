const userModal = require("../model/userModal");

exports.createUserId = async (req, res) => {
  const { id } = req.params;
  const newUserId = await userModal.create({ id });
  res.send("This ismy id" + id);
};

exports.getALlIds = async (req, res) => {
  const ids = await userModal.find();
  res.send(ids);
};
