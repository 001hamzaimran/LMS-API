import express from "express";
import { facultySignin, studentSignin } from "../Controllers/SigninCon.js";
export const signInRoute = express.Router();

signInRoute.post("/faculty-login", facultySignin);
signInRoute.post("/student-login", studentSignin);