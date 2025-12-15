const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("MongoDB is connected")
  );

  await mongoose.connect(`${process.env.MONGODB_URL}/Satyaveda-Hospital`);
};
module.exports = connectDB;
