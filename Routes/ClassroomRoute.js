import express from "express";
import { createBatch, deleteBatch, getAllBatches, getSingleBatch } from "../Controllers/BatchesCon.js";
export const ClassroomRoute = express.Router();

ClassroomRoute.get("/get-all-batches", getAllBatches);
ClassroomRoute.get("/get-batch", getSingleBatch);
ClassroomRoute.post("/add-batch", createBatch);
ClassroomRoute.delete("/delete-batch", deleteBatch);