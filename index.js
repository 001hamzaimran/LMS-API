import express from "express";
import dotenv from "dotenv";
import connectDB from "./Utils/Db.js";
import { SubjectRoute } from "./Routes/SubjectRoute.js";
import { classPostRoute } from "./Routes/ClasspostRoutes.js";
import { RegistrationRoute } from "./Routes/RegistrationRoute.js";
import { DesignationRoute } from "./Routes/DesignationRoutes.js";
import { signInRoute } from "./Routes/SignInRoutes.js";
import { CoursesRoute } from "./Routes/CoursesRoutes.js";
import { BatchRoute } from "./Routes/BatchRoute.js";
import { ClassroomRoute } from "./Routes/ClassroomRoute.js";
import { ensureAuthenticated } from "./Middlewares/ensureAuthenticated.js";
import Tutorialrouter from "./Routes/TutorialRoute.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); 

const Routes = [
  SubjectRoute,
  classPostRoute,
  DesignationRoute,
  CoursesRoute,
  BatchRoute,
  ClassroomRoute,
  Tutorialrouter
];

// app.use("/auth",, SubjectRoute)
// app.use("/auth", classPostRoute)
app.use("/auth", RegistrationRoute)
// app.use("/auth", DesignationRoute)
app.use("/auth", signInRoute);
app.use(
  "/auth",
  ensureAuthenticated,
  Routes.map((route) => route)
);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
