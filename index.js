const app = require("./app");
const { connectDb } = require("./db");

connectDb();
app.listen(2300, () => {
  console.log("Server is started");
});
