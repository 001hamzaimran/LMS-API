import express from "express";
import { createBatch, deleteBatch, getAllBatches, getSingleBatch } from "../Controllers/BatchesCon.js";
export const BatchRoute = express.Router();

BatchRoute.get("/get-all-batches", getAllBatches);
BatchRoute.get("/get-batch", getSingleBatch);
BatchRoute.post("/add-batch", createBatch);
BatchRoute.delete("/delete-batch", deleteBatch);