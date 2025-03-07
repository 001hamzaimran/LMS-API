import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    Batch_Id: {
      type: String,
      required: true,
    },

    Batch_Name: {
      type: String,
      required: true,
    },

    Batch_StartDate: {
      type: String,
      required: true,
    },

    Classroom_code: {
      type: String,
      required: true,
    },

    Course: {
      type: String,
      required: true,
    },

    Faculty_id: {
      type: String,
      required: true,
    },
    Students: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Batch", batchSchema);
