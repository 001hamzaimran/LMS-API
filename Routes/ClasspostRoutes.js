import express from "express";
import { CreateClassPost, getAllClassPosts, getSingleClassPost } from "../Controllers/ClassPostCon.js";
export const classPostRoute = express.Router();

classPostRoute.post("/add-classpost", CreateClassPost);
classPostRoute.get("/get-all-classpost", getAllClassPosts);
classPostRoute.get("/get-classpost", getSingleClassPost);

