import FacultyModel from "../Models/FacultyModel.js";
import { studentModel } from "../Models/StudentModel.js";
import bcrypt from "bcryptjs";

// ________________Faculty Registration________________

export const RegisterFaculty = async (req, res) => {
  try {
    let {
      Faculty_Id,
      Faculty_Name,
      Faculty_Salary,
      Faculty_email,
      Faculty_password,
      Faculty_NIC,
      Faculty_Contact,
      Faculty_Address,
      Faculty_Designation,
    } = req.body;

    if (
      !Faculty_Id ||
      !Faculty_Name ||
      !Faculty_Salary ||
      !Faculty_email ||
      !Faculty_password ||
      !Faculty_NIC ||
      !Faculty_Contact ||
      !Faculty_Address ||
      !Faculty_Designation
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const salt = await bcrypt.genSalt(10);
    Faculty_password = await bcrypt.hash(Faculty_password, salt);

    const findFaculty = await FacultyModel.findOne({
      $or: [{ Faculty_email }, { Faculty_Id }],
    });

    if (findFaculty) {
      if (findFaculty.Faculty_email === Faculty_email) {
        return res
          .status(400)
          .json({ message: "Faculty email already exists" });
      }
      if (findFaculty.Faculty_Id === Faculty_Id) {
        return res.status(400).json({ message: "Faculty ID already exists" });
      }
    }

    const faculty = await FacultyModel.create({
      Faculty_Id,
      Faculty_Name,
      Faculty_Salary,
      Faculty_email,
      Faculty_password,
      Faculty_NIC,
      Faculty_Contact,
      Faculty_Address,
      Faculty_Designation,
      role: "faculty",
    });

    if (!faculty) {
      return res.status(400).json({ message: "Faculty not created" });
    }

    return res.status(201).json({ faculty, message: "Faculty created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllFaculty = async (req, res) => {
  try {
    const faculties = await FacultyModel.find().populate("Faculty_Designation");
    return res.status(200).json({ faculties, message: "Faculties found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getFaculty = async (req, res) => {
  try {
    const { Faculty_Id } = req.query;
    const faculty = await FacultyModel.findOne({ Faculty_Id }).populate(
      "Faculty_Designation"
    );
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    return res.status(200).json({ faculty, message: "Faculty found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const { Faculty_Id } = req.query;
    const faculty = await FacultyModel.findOne({ Faculty_Id });
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    const updatedFaculty = await FacultyModel.findOneAndUpdate(
      { Faculty_Id },
      req.body,
      { new: true }
    );
    return res.status(200).json({ updatedFaculty, message: "Faculty updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const { Faculty_Id } = req.query;
    const faculty = await FacultyModel.findOne({ Faculty_Id });
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    await FacultyModel.findOneAndDelete({ Faculty_Id });
    return res.status(200).json({ message: "Faculty deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// ________________Faculty Registration End________________

// ________________Student Registration________________

export const RegisterStudent = async (req, res) => {
  try {
    let {
      Student_Id,
      Student_Name,
      Student_email,
      Student_Address,
      Student_NIC,
      Student_Contact,
      Guardian_Number,
      Batch,
      Student_Enroll,
      Fees_status,
    } = req.body;

    if (
      !Student_Id ||
      !Student_Name ||
      !Student_email ||
      !Student_Address ||
      !Student_NIC ||
      !Student_Contact ||
      !Guardian_Number ||
      !Batch ||
      !Student_Enroll ||
      !Fees_status
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findStudent = await studentModel.findOne({
      $or: [{ Student_email }, { Student_Id }],
    });

    const salt = await bcrypt.genSalt(10);
    Student_Enroll = await bcrypt.hash(Student_Enroll, salt);

    if (findStudent) {
      if (findStudent.Student_email === Student_email) {
        return res
          .status(400)
          .json({ message: "Student email already exists" });
      }
      if (findStudent.Student_Id === Student_Id) {
        return res.status(400).json({ message: "Student ID already exists" });
      }
    }

    const student = await studentModel.create({
      Student_Id,
      Student_Name,
      Student_email,
      Student_Address,
      Student_NIC,
      Student_Contact,
      Guardian_Number,
      Batch,
      Student_Enroll,
      Fees_status,
      role: "student",
    });

    return res.status(201).json({
      student,
      message: "Student created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    return res.status(200).json({ students, message: "Students found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const { Student_Id } = req.query;
    const student = await studentModel.findOne({ Student_Id });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({ student, message: "Student found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { Student_Id } = req.query;
    const student = await studentModel.findOne({ Student_Id });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const updatedStudent = await studentModel.findOneAndUpdate(
      { Student_Id },
      req.body,
      { new: true }
    );
    return res.status(200).json({ updatedStudent, message: "Student updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { Student_Id } = req.query;
    const student = await studentModel.findOne({ Student_Id });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    await studentModel.findOneAndDelete({ Student_Id });
    return res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// ________________Student Registration End________________
