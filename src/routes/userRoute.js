const express = require("express");
const {
  signUpUser,
  loginUser,
  getAUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();



// CRUD operations for USER 
router.post("/create/user", signUpUser);
router.post("/login/user", loginUser);
router.get("/user/:id", getAUser);
router.get("/users",getUsers);

// edit the existing record for user
router.put("/edit/user/:id",editUser);

// to delete the complete user record for a perticular 
router.delete("/edit/user/:id",deleteUser);




module.exports = router;
