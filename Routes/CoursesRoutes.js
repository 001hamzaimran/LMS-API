import express from "express";
import { createCourse, getAllCourses , getSingleCourse, deleteCourse} from "../Controllers/CoursesCon.js";

export const CoursesRoute = express.Router();

CoursesRoute.post("/add-course", createCourse);
CoursesRoute.get("/get-all-courses", getAllCourses);
CoursesRoute.get("/get-course", getSingleCourse);
CoursesRoute.delete("/delete-course", deleteCourse);