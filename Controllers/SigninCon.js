import FacultyModel from "../Models/FacultyModel.js";
import bcrypt from "bcryptjs";
import { studentModel } from "../Models/StudentModel.js";
import jwt from "jsonwebtoken";

export const facultySignin = async (req, res) => {
  try {
    const { Faculty_email, Faculty_password } = req.body;
    const faculty = await FacultyModel.findOne({ Faculty_email });
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    const isPasswordMatch = await bcrypt.compare(
      Faculty_password,
      faculty.Faculty_password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const jwtToken = jwt.sign({ facultyId: faculty }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return res
      .status(200)
      .json({ faculty, message: "Login successful", jwtToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const studentSignin = async (req, res) => {
  try {
    const { Student_email, Student_Enroll } = req.body;
    const student = await studentModel.findOne({ Student_email });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const isPasswordMatch = await bcrypt.compare(
      Student_Enroll,
      student.Student_Enroll
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const jwtToken = jwt.sign({ studentId: student }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return res
      .status(200)
      .json({ student, message: "Login successful", jwtToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};


export const adminSignin = async (req, res) => {
  try {
    const { Admin_email, Admin_password } = req.body;
    if (!Admin_email || !Admin_password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (
      Admin_email !== process.env.ADMIN_EMAIL ||
      Admin_password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const admin = {
      Admin_email,
      Admin_password,
      role: "admin",
    };
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    const jwtToken = jwt.sign({ adminId: admin }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return res
      .status(200)
      .json({ admin, message: "Login successful", jwtToken });
  } catch (error) {
    console.error(error)
  }
}