const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  name: String,
  VIP: {
    price: Number,
    format: [[String]], // 2D array of arrays of strings
  },
  Executive: {
    price: Number,
    format: [[String]], // 2D array of arrays of strings
  },
  Normal: {
    price: Number,
    format: [[String]], // 2D array of arrays of strings
  },
});

const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = { Cinema };
