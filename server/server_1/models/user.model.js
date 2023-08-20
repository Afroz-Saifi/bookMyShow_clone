const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: false },
    email: { type: String, unique: true },
    password: { type: String, required: true, unique: false },
    verify: Boolean,
  },
  { versionKey: false, timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
