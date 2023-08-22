const mongoose = require("mongoose");

const foodBeverageSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["BEVERAGE", "COMBOS", "POPCORN"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const FoodBeverage = mongoose.model("foodBeverage", foodBeverageSchema);

module.exports = { FoodBeverage };
