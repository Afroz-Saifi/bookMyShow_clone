const { FoodBeverage } = require("../models/foodBeverage.model");

const addFood = async (req, res) => {
  const foodData = req.body;
  try {
    const data = new FoodBeverage(foodData);
    data.save();
    return res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getFoods = async (req, res) => {
  try {
    const data = await FoodBeverage.find();
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await FoodBeverage.findById(id);
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getFilteredFood = async (req, res) => {
  const { category } = req.params;
  try {
    if(category=="ALL"){
      const data = await FoodBeverage.find();
      return res.status(200).json({
          success: true,
          data
      })
    }
    const data = await FoodBeverage.find({ category });
    return res.status(200).json({
        success: true,
        data
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getFoods, addFood, getFoodById, getFilteredFood };
