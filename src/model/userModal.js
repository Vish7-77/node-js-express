const mongoose = require("mongoose");

const userModal = new mongoose.Schema({
  id: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userModal);
