const express = require("express");
const app = express();
const productRouter = require("./src/routes/productRoute");

// app .,use expres.json() is important when u want to send the data in body
 app.use(express.json());
app.use("/api", productRouter);

module.exports = app;
