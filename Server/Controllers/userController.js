const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const secretKey = "12345";

// Register User:

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email Already Exists" }); // Added return
    }

    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      password: hash_password,
    });

    const token = await userCreated.generateToken(); // Generate token

    res.status(201).json({
      message: "User Created Successfully",
      user: userCreated,
      token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login User:
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User Not Found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid Credentials" });

    const token = await user.generateToken();

    res.status(200).json({
      token,
      user: { username: user.username, email: user.email }, // Include user details
      userId: user._id.toString(),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { registerUser, loginUser };
