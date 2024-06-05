const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRoute");

app.use("/api", userRouter);

//localhost:2300/api/user/254352

module.exports = app;
