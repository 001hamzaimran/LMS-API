import express from "express";
import {
  createTutorial,
  deleteTutorial,
  getAllTutorials,
  getTutorialById,
//   updateTutorial,
} from "../Controllers/TutorialCon.js";
import { uploadMiddleware } from "../Middlewares/multer.js";
const Tutorialrouter = express.Router();

// Create a new tutorial (with media upload)
Tutorialrouter.post("/add_tutorial", uploadMiddleware, createTutorial);

// Get all tutorials
Tutorialrouter.get("/get_all_tutorials", getAllTutorials);

// Get a single tutorial by ID
Tutorialrouter.get("/get_single_tutorial", getTutorialById);

// Update a tutorial (with media upload)
// Tutorialrouter.put("/update_tutorial", uploadMiddleware, updateTutorial);

// Delete a tutorial
Tutorialrouter.delete("/delete_tutorial", deleteTutorial);

export default Tutorialrouter;
