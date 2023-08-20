const express = require("express");
const {getAllMovies, getMovieDescription} = require('../controller/movie.controller');

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies)
movieRouter.get("/description/:movieId", getMovieDescription)

module.exports = { movieRouter };
