import { Designation } from "../Models/DesignationModel.js";

export const getAllDesignations = async (req, res) => {
  try {
    const designations = await Designation.find();
    return res
      .status(200)
      .json({ designations, message: "Designations found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const createDesignation = async (req, res) => {
  try {
    const { Designation_Id, Designation_Name } = req.body;
    if (!Designation_Id || !Designation_Name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingDesignation = await Designation.findOne({
      Designation_Id,
    });
    if (existingDesignation) {
      return res.status(400).json({ message: "Designation already exists" });
    }
    const designation = await Designation.create({
      Designation_Id,
      Designation_Name,
    });
    return res
      .status(200)
      .json({ designation, message: "Designation created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDesignation = async (req, res) => {
  try {
    const { Designation_Id } = req.query;
    const designation = await Designation.findOne({ Designation_Id });
    if (!designation) {
      return res.status(404).json({ message: "Designation not found" });
    }
    await Designation.findOneAndDelete({ Designation_Id });
    return res.status(200).json({ message: "Designation deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
