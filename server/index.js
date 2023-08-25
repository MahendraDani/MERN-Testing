require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");

const { dbConnect } = require("./config/dbConfig");

const app = express();
dbConnect();

app.use(
  cors({
    origin: "https://mern-testing-psi.vercel.app/",
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Home route working!");
});

app.use("/user", require("./routes/auth")); // User route

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
