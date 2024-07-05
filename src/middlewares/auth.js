const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if(!token){
        return res.status(400).json({
            message: "token is invalid",
          });
    }

    const { userId } = await jwt.verify(
      token,
      "jdhscvjdhcnhdsgv$%RYTRFUYDFYCRDHC"
    );
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found on this Id",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
