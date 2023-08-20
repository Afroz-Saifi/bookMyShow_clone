const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/user.route");
const { authCheck } = require("./middleware/authentication");
const { connectDb } = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use(authCheck);

app.listen(process.env.PORT, () => {
  console.log(`server running on PORT ${process.env.PORT}`);
  try {
    connectDb(process.env.MONGO_URL);
    console.log("connectd to db");
  } catch (error) {
    console.log(error);
  }
});
