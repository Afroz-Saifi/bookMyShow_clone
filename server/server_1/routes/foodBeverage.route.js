const express = require("express");
const { addFood, getFoods, getFoodById, getFilteredFood } = require("../controller/foodBeverage.controller");

const foodBeverageRouter = express.Router();

foodBeverageRouter.post("/add", addFood)
foodBeverageRouter.get("/", getFoods);
foodBeverageRouter.get("/:id", getFoodById)
foodBeverageRouter.get("/category/:category", getFilteredFood)

module.exports = { foodBeverageRouter };
