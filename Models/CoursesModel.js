import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    Course_Id: {
      type: String,
      required: true,
    },

    Course_Name: {
      type: String,
      required: true,
    },

    Course_Description: {
      type: String,
      required: true,
    },

    Course_Duration: {
      type: String,
      required: true,
    },

    Course_Fee: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);