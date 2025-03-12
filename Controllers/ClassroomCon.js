import { Classroom } from "../Models/ClassroomModel.js";


export const createClassroom = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const { class_Id, class_Name, Faculty_id, Post_Data, PlayList } = req.body;
    console.log("Received request body:", req.body);

    // Ensure all required fields are provided
    if (!class_Id || !class_Name || !Faculty_id || !Post_Data || !PlayList) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create classroom in database
    const classroom = await Classroom.create({
      class_Id,
      class_Name,
      Faculty_id,
      Post_Data,
      PlayList,
    });

    return res.status(201).json({ classroom, message: "Classroom created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    return res.status(200).json({ classrooms, message: "Classrooms found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleClassroom = async (req, res) => {
  try {
    const { class_Id } = req.query;
    const classroom = await Classroom.findOne({ class_Id });
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    return res.status(200).json({ classroom, message: "Classroom found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteClassroom = async (req, res) => {
  try {
    const { class_Id } = req.query;
    const classroom = await Classroom.findOne({ class_Id });
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    await Classroom.findOneAndDelete({ class_Id });
    return res.status(200).json({ message: "Classroom deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};


