const { Booking } = require("../models/bookings.model");
const QRCode = require("qrcode");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioPhoneNumber = process.env.twilioPhoneNumber;

const client = new twilio(accountSid, authToken);

const makeBooking = async (req, res) => {
  const data = req.body;
  const { email, mobile } = req.query;
  // console.log(mobile);
  try {
    // const qrData = JSON.stringify(data);
    const qrData = `Date: ${data.date}\nTime: ${data.time}\n${data.seat}`;
    const qrCodeBuffer = await QRCode.toBuffer(qrData);
    const qrCodeBase64 = qrCodeBuffer.toString("base64");
    const bookingDetails = new Booking({ ...data, QRcode: qrCodeBase64 });
    await bookingDetails.save();

    // food
    const selectedFoodDetails = data.foodAndBeverage;
    const foodKets = Object.keys(selectedFoodDetails);
    let myFoods = foodKets
      .map(
        (ele) =>
          `<p> ${selectedFoodDetails[`${ele}`].title} (Qty. ${
            selectedFoodDetails[`${ele}`].quantity
          })  </p>`
      )
      .join("");
    let smsFoods = foodKets
      .map(
        (ele) =>
          `${selectedFoodDetails[`${ele}`].title} (Qty. ${
            selectedFoodDetails[`${ele}`].quantity
          })  \n`
      )
      .join("");
    //food ends
const formattedDate = data.date
    sendBookingUpdate(
      bookingDetails,
      email,
      qrCodeBase64,
      formattedDate,
      myFoods
    );
    // sendSMS(bookingDetails, formattedDate, `+${mobile}`, myFoods);
    return res.status(201).json({
      success: true,
      data: bookingDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

function sendBookingUpdate(
  bookingDetails,
  email,
  qrCodeBase64,
  formattedDate,
  myFoods
) {
   const qrCodeEncode = encodeURIComponent(qrCodeBase64)
  transporter
    .sendMail({
      from: process.env.mailer,
      to: email,
      subject: "Booking Success",
      text: "Hey, here's your booking information.",
      html: `  
      <a style="font-size: 20px;" href="http://localhost:3000/qrcode/${qrCodeEncode}"> CLICK for QRCODE </a>
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
      <p style="font-weight: bold;">${bookingDetails.showName}</p>
      <p style="font-weight: bold;">${bookingDetails.cinemaName}</p>
      <p style="font-size: 12px;">${formattedDate} / ${bookingDetails.time}</p>
      <p style="font-size: 12px;">${bookingDetails.langFormat.language}, ${bookingDetails.langFormat.format}</p>
      <p style="font-size: 12px;">${bookingDetails.seat}</p>
      ${myFoods}
      <p style="font-size: 14px; font-weight: bold;">TOTAL : Rs. ${bookingDetails.payment}</p>
      </div>
      <img style="width: 200px;" src=${bookingDetails.showImage} />
      </div>
      `,
    })
    .then(() => {
      console.log("mail sent succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.mailer,
    pass: "qywxxoqbegsepgku",
  },
});

function sendSMS(bookingDetails, formattedDate, mobile, smsFoods) {
  // console.log(mobile);
  const smsContent = `
    Booking Details:
    Show Name: ${bookingDetails.showName}
    Cinema Name: ${bookingDetails.cinemaName}
    Language & Format: ${bookingDetails.langFormat.language}, ${bookingDetails.langFormat.format}
    Date & Time: ${formattedDate}, ${bookingDetails.time}
    Seat: ${bookingDetails.seat}
    ${smsFoods}
    Total: Rs. ${bookingDetails.payment}
  `;

  client.messages
    .create({
      body: smsContent,
      from: twilioPhoneNumber,
      to: mobile,
    })
    .then((message) => console.log("SMS sent:", message.sid))
    .catch((error) => console.error("Error sending SMS:", error));
}

const getCinemaBookings = async (req, res) => {
  const { PvrId, date, time, movieId } = req.body;
  try {
    const data = await Booking.aggregate([
      {
        $match: {
          PvrId: PvrId,
          movieId: movieId,
          date: new Date(date),
          time: time,
        },
      },
      {
        $group: {
          _id: null,
          seats: { $push: "$seat" },
        },
      },
      {
        $project: {
          _id: 0,
          seats: 1,
        },
      },
    ]);

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

const getMyBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Booking.find({ userId: id });
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

module.exports = { makeBooking, getCinemaBookings, getMyBookings };
