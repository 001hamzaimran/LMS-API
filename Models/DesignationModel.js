import mongoose from "mongoose";

const designationSchema = new mongoose.Schema(
  {
    Designation_Id: {
      type: String,
      required: true,
    },

    Designation_Name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Designation = mongoose.model("Designation", designationSchema);
