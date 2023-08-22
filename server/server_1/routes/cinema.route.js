const express = require("express");
const { addNewCinema, getCinemas, getCinema } = require("../controller/cinema.controller");

const cinemaRouter = express.Router();

cinemaRouter.post("/add", addNewCinema)
cinemaRouter.get("/cinemas", getCinemas)
cinemaRouter.get("/cinema/:id", getCinema)

module.exports = { cinemaRouter };
