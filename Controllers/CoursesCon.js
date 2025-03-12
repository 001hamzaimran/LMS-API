import CoursesModel from "../Models/CoursesModel.js";

export const createCourse = async (req, res) => {
    try {
        const course = await CoursesModel.create(req.body);
        return res.status(201).json({ course, message: "Course created" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export const getAllCourses = async (req, res) => {
    try {
        const courses = await CoursesModel.find();
        return res.status(200).json({ courses, message: "Courses found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export const getSingleCourse = async (req, res) => {
    try {
        const { Course_Id } = req.query;
        const course = await CoursesModel.findOne({ Course_Id });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res.status(200).json({ course, message: "Course found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};  

export const deleteCourse = async (req, res) => {
    try {
        const { Course_Id } = req.query;
        const course = await CoursesModel.findOne({ Course_Id });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        await CoursesModel.findOneAndDelete({ Course_Id });
        return res.status(200).json({ message: "Course deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
