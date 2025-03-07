import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema(
  {
    class_Id: {
      type: String,
      required: true,
    },

    class_Name: {
      type: String,
      required: true,
    },

    Faculty_id: {
      type: String,
      required: true,
    },

    Post_Data: {
      type: String,
      required: true,
    },
    PlayList: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Classroom = mongoose.model("Classroom", classroomSchema);
