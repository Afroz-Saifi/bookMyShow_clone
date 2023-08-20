const { userModel } = require("../models/user.model");

const userExists = async (req, res, next) => {
  const { email } = req.body
  const data = await userModel.findOne({ email });
  if (data) {
    return res.status(400).json({ msg: "User already exist, please login" });
  } else {
    next();
  }
};

module.exports = { userExists };
