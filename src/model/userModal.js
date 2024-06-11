const mongoose = require("mongoose");

const userModal = new mongoose.Schema({
  id: String,
});

module.exports = mongoose.model("User", userModal);
