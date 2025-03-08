import express from "express";
import dotenv from "dotenv";
import connectDB from "./Utils/Db.js";
import { SubjectRoute } from "./Routes/SubjectRoute.js";
import { classPostRoute } from "./Routes/ClasspostRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", SubjectRoute)
app.use("/auth", classPostRoute)


app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
