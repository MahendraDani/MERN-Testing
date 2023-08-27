require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { dbConnect };
