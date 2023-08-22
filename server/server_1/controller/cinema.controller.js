const { Cinema } = require('../models/cinema.model');

const addNewCinema = async (req, res) => {
  const data = req.body;
  try {
    const cinemaData = new Cinema(data);
    await cinemaData.save();
    return res.status(201).json({
      success: true,
      cinemaData,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getCinemas = async (req, res) => {
  try {
      const data = await Cinema.find();
      return res.status(200).json({
        success: true, 
        data
      })    
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

const getCinema = async (req, res) => {
  try {
    const {id} = req.params
    const data = await Cinema.findById(id)
    return res.status(200).json({
      success: true,
      data
    })    
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

module.exports = { addNewCinema, getCinemas, getCinema };
