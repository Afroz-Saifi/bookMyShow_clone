const express = require("express");
const {getAllMovies, getMovieDescription, addNewMovie} = require('../controller/movie.controller');

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies)
movieRouter.get("/description/:movieId", getMovieDescription)
movieRouter.post("/", addNewMovie)

module.exports = { movieRouter };
