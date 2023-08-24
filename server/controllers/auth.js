const { User } = require("../models/user");
const authController = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = new User({
      name: name,
      age: age,
    });
    newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { authController };
