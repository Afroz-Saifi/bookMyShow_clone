const express = require("express");
const { addNewCinema, getCinemas } = require("../controller/cinema.controller");

const cinemaRouter = express.Router();

cinemaRouter.post("/add", addNewCinema)
cinemaRouter.get("/cinemas", getCinemas)

module.exports = { cinemaRouter };
