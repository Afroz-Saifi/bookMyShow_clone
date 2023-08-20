const jwt = require("jsonwebtoken");
// const { postModel } = require("../model/post.model");

const authCheck = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "fw24_605");
  if (decoded) {
    next();
  } else {
    return res
      .status(400)
      .json({ err: "you are not authorized for this route" });
  }
};

module.exports = { authCheck };
