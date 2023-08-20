const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    description: String,
    Language: String,
    Poster: String,
  },
  { versionKey: false, timestamps: true }
);

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = { MovieModel };
