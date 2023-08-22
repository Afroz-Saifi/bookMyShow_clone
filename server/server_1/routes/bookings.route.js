const express = require("express");
const { makeBooking } = require("../controller/bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.post("/book", makeBooking)

module.exports = { bookingsRouter };
