const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const secretKey = "12345";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      secretKey,
      { expiresIn: "1d" }
    );
  } catch (error) {
    console.log(error);
  }
};

const user = mongoose.model("User", userSchema);

module.exports = user;
