import express from "express";
import { createDesignation, deleteDesignation, getAllDesignations } from "../Controllers/DesignationCon.js";

export const DesignationRoute = express.Router();

DesignationRoute.post("/create-designation", createDesignation);
DesignationRoute.get("/get-all-designations", getAllDesignations);
DesignationRoute.delete("/delete-designation", deleteDesignation);