const express = require("express");
const {
  signUpUser,
  loginUser,
  getAUser,
  getUsers,
} = require("../controllers/userController");
const router = express.Router();

router.post("/create/user", signUpUser);
router.post("/login/user", loginUser);
router.get("/user/:id", getAUser);
router.get("/users",getUsers);




module.exports = router;
