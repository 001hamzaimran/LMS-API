import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    Subject_Id: {
      type: String,
      required: true,
    },

    Subject_Name: {
      type: String,
      required: true,
    },

    Date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

export const Subject = mongoose.model("Subject", subjectSchema);
