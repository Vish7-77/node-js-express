const User = require("../model/userModel");

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

    res.status(200).json({
      message: "Logged in successfully",
      userExist: userExist,
    }); 
    
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
