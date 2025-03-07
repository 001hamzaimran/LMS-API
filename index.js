import express from "express";
import dotenv from "dotenv";
import connectDB from "./Utils/Db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
