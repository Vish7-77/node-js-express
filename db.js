const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/usermodal";

exports.connectDb = async () => {
  mongoose
    .connect(URI)
    .then((res) => console.log("DB is connected"))
    .catch((err) => console.log("MONGO DB ERROR"));
};
