import express from "express";
import {
  deleteFaculty,
  deleteStudent,
  getAllFaculty,
  getAllStudents,
  getFaculty,
  getSingleStudent,
  RegisterFaculty,
  RegisterStudent,
  updateFaculty,
  updateStudent,
} from "../Controllers/RegistrationCon.js";

export const RegistrationRoute = express.Router();
// Faculty Routes

RegistrationRoute.post("/register-faculty", RegisterFaculty);
RegistrationRoute.get("/get-all-faculty", getAllFaculty);
RegistrationRoute.get("/get-faculty", getFaculty);
RegistrationRoute.post("/update-faculty", updateFaculty);
RegistrationRoute.delete("/delete-faculty", deleteFaculty);

// Faculty Routes

// Students Routes
RegistrationRoute.post("/register-student", RegisterStudent);
RegistrationRoute.get("/get-all-students", getAllStudents);
RegistrationRoute.get("/get-student", getSingleStudent);
RegistrationRoute.post("/update-student", updateStudent);
RegistrationRoute.delete("/delete-student", deleteStudent);
