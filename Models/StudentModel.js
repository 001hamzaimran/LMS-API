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

    Fees_status: {
      type: String,
      required: true,
    },

    Batch: {
      type: String,
      required: true,
    },

    Student_email: {
      type: String,
      required: true,
    },

    Guardian_Number: {
      type: Number,
      required: true,
    },

    Student_Contact: {
      type: Number,
      required: true,
    },

    Student_NIC: {
      type: String,
      required: true,
    },
    Student_Address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const studentModel = mongoose.model("students", studentSchema);
