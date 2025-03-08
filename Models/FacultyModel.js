import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    Faculty_Id: {
      type: String,
      required: true,
    },

    Faculty_Name: {
      type: String,
      required: true,
    },

    Faculty_Salary: {
      type: String,
      required: true,
    },

    Faculty_email: {
      type: String,
      required: true,
    },

    Faculty_password: {
      type: String,
      required: true,
    },

    Faculty_NIC: {
      type: String,
      required: true,
    },

    Faculty_Contact: {
      type: Number,
      required: true,
    },

    Faculty_Address: {
      type: String,
      required: true,
    },
    Faculty_Designation: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);
