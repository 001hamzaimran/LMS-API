import { Subject } from "../Models/SubjectModel.js";

export const CreateSubject = async (req, res) => {
  try {
    const { Subject_Id, Subject_Name, Date } = req.body;
    if (!Subject_Id || !Subject_Name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const subject = await Subject.create({ Subject_Id, Subject_Name, Date });
    return res.status(201).json(subject);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    return res.status(200).json({subjects, message: "Subjects found"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleSubject = async (req, res) => {
  try {
    const { Subject_Id } = req.query;
    const subject = await Subject.findOne({ Subject_Id });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    return res.status(200).json({ subject, message: "Subject found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}
