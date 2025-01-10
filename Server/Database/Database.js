const mongoose = require("mongoose");

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/CooksCorner";

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTION SUCCESSFUL");
  } catch (error) {
    console.error("DB CONNECTION ERROR: ", error);
  }
};

module.exports = connectDb;
