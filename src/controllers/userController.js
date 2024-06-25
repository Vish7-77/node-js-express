const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

// this will be async function because my function will talk to database for creating the new user
exports.signUpUser = async (req, res) => {
  try {
    console.log(req.body);

    // we are taking out the values
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // we are checking whether those values are really present or nont
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Missing the data write proper data",
      });
    }

    // we are checking whether the user is already exist or not
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exist with this email",
      });
    }

    const newUser = await User.create({ email, password, name });
    res.status(200).json({
      newUser: newUser,
      message: "User Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    console.log(req.body);

    // we are taking out the values
    const email = req.body.email;
    const password = req.body.password;

    // we are checking whether those values are really present or nont
    if (!email || !password) {
      return res.status(400).json({
        message: "Missing the data write proper data",
      });
    }

    // find the user with mail and check if its present in DB
    const userExist = await User.findOne({ email });

    // if user not exist then throw the error response
    if (!userExist) {
      return res.status(404).json({
        message: "User nnot found with this email",
      });
    }

    //if we found the user check the password of that user , is it matching to the password which is getting in req.body
    if (userExist.password != password) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const id = userExist._id;

    //adding the token -- encrypted key
    const token = jwt.sign({ id }, "jdhscvjdhcnhdsgv$%RYTRFUYDFYCRDHC");

    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    // these two things will be taken from user to perform any action
    const { id } = req.params; // this will be the parameter ID we will find the product from this
    const { name, email } = req.body; // this will be the data which we will edit
    const newUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    res.status(200).json({
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findOneAndDelete(id);
    res.status(200).json({
      message: "User deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
