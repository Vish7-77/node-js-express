const express = require("express");
const app = express();
const userRoute = require("./src/routes/userRoute");

app.use(express.json());
app.use("/api", userRoute);

module.exports = app;

//localhost:2300/api/create/user --  POST -- body:{name:,email:password}
