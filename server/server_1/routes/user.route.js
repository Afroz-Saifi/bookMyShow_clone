const express = require("express");
const { userExists } = require("../middleware/user.exists");
const { registerUser, loginUser, optVerifier } = require("../controller/user.controller");
const otpverify = require("../middleware/otp.middleware");

const userRouter = express.Router();

userRouter.post("/register", userExists, registerUser); 
userRouter.post("/login", loginUser);


userRouter.post("/verifyotp", otpverify, optVerifier)

module.exports = { userRouter };
