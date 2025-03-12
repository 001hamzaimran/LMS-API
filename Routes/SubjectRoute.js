import express from "express";
import { CreateSubject, deleteSubject, getAllSubjects, getSingleSubject } from "../Controllers/SubjectCon.js";
export const SubjectRoute = express.Router();

SubjectRoute.post("/add-subject", CreateSubject);
SubjectRoute.get("/get-all-subjects", getAllSubjects);
SubjectRoute.get("/get-subject", getSingleSubject);
SubjectRoute.delete("/delete-subject", deleteSubject);