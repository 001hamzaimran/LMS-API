import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema(
  {
    tut_id: {
      type: String,
      required: true,
      unique: true,
    },
    tut_name: {
      type: String,
      required: true,
    },
    tut_des: {
      type: String,
    },
    tut_keywords: {
      type: [String],
    },
    media: {
      type: String,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
  },
  { timestamps: true }
);

export const Tutorial = mongoose.model("Tutorial", tutorialSchema);
