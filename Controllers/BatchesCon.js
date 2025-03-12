import BatchesModel from "../Models/BatchesModel.js";

export const createBatch = async (req, res) => {
  try {
    const {
      Batch_Id,
      Batch_Name,
      Batch_StartDate,
      Classroom_code,
      Course,
      Faculty_id,
      Students,
    } = req.body;
    console.log("Received request body:", req.body);

    // Ensure all required fields are provided
    if (
      !Batch_Id ||
      !Batch_Name ||
      !Batch_StartDate ||
      !Classroom_code ||
      !Course ||
      !Faculty_id ||
      Students === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Ensure Students is a non-empty array
    if (!Array.isArray(Students) || Students.length === 0) {
      return res
        .status(400)
        .json({ message: "Students array cannot be empty" });
    }

    // Create batch in database
    const batch = await BatchesModel.create({
      Batch_Id,
      Batch_Name,
      Batch_StartDate,
      Classroom_code,
      Course,
      Faculty_id,
      Students, // Include Students field
    });

    return res
      .status(201)
      .json({ batch, message: "Batch created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllBatches = async (req, res) => {
  try {
    const batches = await BatchesModel.find().populate("Course");
    return res.status(200).json({ batches, message: "Batches found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleBatch = async (req, res) => {
  try {
    const { Batch_Id } = req.query;
    const batch = await BatchesModel.findOne({ Batch_Id }).populate("Course");
    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }
    return res.status(200).json({ batch, message: "Batch found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteBatch = async (req, res) => {
  try {
    const { Batch_Id } = req.query;
    const batch = await BatchesModel.findOne({ Batch_Id });
    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }
    await BatchesModel.findOneAndDelete({ Batch_Id });
    return res.status(200).json({ message: "Batch deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
