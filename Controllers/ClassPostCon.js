import { ClassPost } from "../Models/ClasspostModel.js";
import { Subject } from "../Models/SubjectModel.js";

export const CreateClassPost = async (req, res) => {
  try {
    const { post_id, postName, date, attachDoc, subject } = req.body;
    if (!post_id || !postName || !attachDoc || !subject) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findPost = await ClassPost.findOne({ post_id });
    if (findPost) {
      return res.status(400).json({ message: "ClassPost already exists" });
    }

    const findSubject = await Subject.findById(subject);
    if (!findSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const classPost = await ClassPost.create({
      post_id,
      postName,
      date,
      attachDoc,
      subject,
    });
    return res.status(201).json({ classPost, message: "ClassPost created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllClassPosts = async (req, res) => {
  try {
    const classPosts = await ClassPost.find();
    return res.status(200).json({ classPosts, message: "ClassPosts found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleClassPost = async (req, res) => {
  try {
    const { PostId } = req.query;
    const classPost = await ClassPost.findOne({ post_id: PostId }).populate(
      "subject"
    );
    if (!classPost) {
      return res.status(404).json({ message: "ClassPost not found" });
    }
    return res.status(200).json({ classPost, message: "ClassPost found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteClassPost = async (req, res) => {
  try {
    const { PostId } = req.query;
    const classPost = await ClassPost.findOne({ post_id: PostId });
    if (!classPost) {
      return res.status(404).json({ message: "ClassPost not found" });
    }
    await ClassPost.findOneAndDelete({ post_id: PostId });
    return res.status(200).json({ message: "ClassPost deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
