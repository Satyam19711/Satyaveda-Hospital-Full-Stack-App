const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongoDB");
const connectCloudinary = require("./config/cloudinary");
const adminRouter = require("./routes/adminRouter");
const doctorRouter = require("./routes/doctorRouter");
const userRouter = require("./routes/userRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

app.get("/", (req, res) => {
  res.send("Satyam");
});

app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/api/health", (req, res) => {
  const mongoose = require("mongoose");

  const dbState = mongoose.connection.readyState;

  if (dbState === 1) {
    return res.json({
      success: true,
      database: "connected",
    });
  } else {
    return res.json({
      success: false,
      database: "not connected",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
