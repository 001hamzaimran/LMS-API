import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    Student_Id: {
      type: String,
      required: true,
    },

    Student_Enroll: {
      type: String,
      required: true,
    },

    Student_Name: {
      type: String,
      required: true,
    },

    Classroom_status: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    Batch: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export const studentModel = mongoose.model("students", studentSchema);