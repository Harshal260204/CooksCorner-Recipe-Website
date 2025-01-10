const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./Routes/userRoutes");
const recipeRoutes = require("../Server/Routes/RecipeRoutes");
const cors = require("cors");
const app = express();
const corsSystem = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["POST", "GET", "PUT", "DELETE"],
};
app.use(cors(corsSystem));
app.use(express.json());
app.use("/user", userRoutes);
app.use("/recipes", recipeRoutes);

// Routes are defined below:
app.get("/", (req, res) => res.send("API is running"));

// Connection to MongoDB
const mongoURI = "mongodb://localhost:27017/CooksCorner";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
