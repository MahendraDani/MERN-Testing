require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mahendra:mahendra@cluster0.un4afhl.mongodb.net/database?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { dbConnect };
