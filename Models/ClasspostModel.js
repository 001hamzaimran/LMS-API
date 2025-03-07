import mongoose from "mongoose";

const classPostSchema = new mongoose.Schema(
  {
    post_id: {
      type: String,
      required: true,
      unique: true,
    },
    postName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    attachDoc: {
      type: String,
    }, // URL to attached document
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
  },
  { timestamps: true }
);

export const ClassPost = mongoose.model("ClassPost", classPostSchema);
