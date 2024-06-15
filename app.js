const express = require("express");
const app = express();
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");

app.use(express.json());
app.use("/api", userRoute);
app.use("/api", productRoute);

module.exports = app;

//localhost:2300/api/create/user --  POST -- body:{name:,email:password}
