import express from "express";
import { adminSignin, facultySignin, studentSignin } from "../Controllers/SigninCon.js";
export const signInRoute = express.Router();

signInRoute.post("/faculty-login", facultySignin);
signInRoute.post("/student-login", studentSignin);
signInRoute.post("/admin-login", adminSignin);