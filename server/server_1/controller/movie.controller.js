const { MovieModel } = require("../models/movies.model");

const getAllMovies = async (req, res) => {
  try {
    const data = await MovieModel.find();
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

const getMovieDescription = async (req, res) => {
    try {
        const {movieId} = req.params
        const data = await MovieModel.findById(movieId);
        return res.status(200).json({
            success: true, 
            data
        })        
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

const addNewMovie = async (req, res) => {
  try {
    const rawData = req.body;
    const movieData = new MovieModel(rawData);
    await movieData.save();
    return res.status(201).json({
      success: true,
    })
  } catch (error) {
    return res.json({error: error.message})
  }
}

module.exports = { getAllMovies, getMovieDescription, addNewMovie };
