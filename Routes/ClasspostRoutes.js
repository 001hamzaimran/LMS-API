import express from "express";
import { CreateClassPost, deleteClassPost, getAllClassPosts, getSingleClassPost } from "../Controllers/ClassPostCon.js";
export const classPostRoute = express.Router();

classPostRoute.post("/add-classpost", CreateClassPost);
classPostRoute.get("/get-all-classpost", getAllClassPosts);
classPostRoute.get("/get-classpost", getSingleClassPost);
classPostRoute.delete("/delete-classpost", deleteClassPost);
