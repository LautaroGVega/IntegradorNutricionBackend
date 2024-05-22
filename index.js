const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");
const app = express();

app.use(express.json());

dotenv.config();

connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
//importar rutas 
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});