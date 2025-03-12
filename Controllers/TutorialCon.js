import {Tutorial} from "../Models/TutorialModel.js";
export const createTutorial = async (req, res) => {
    try {
        const { tut_id, tut_name, tut_des, tut_keywords, subject } = req.body;
        const media = req.file ? `http://localhost:8080/uploads/${req.file.filename}` : null;
        
        const tutorial = new Tutorial({
            tut_id,
            tut_name,
            tut_des,
            tut_keywords: tut_keywords ? tut_keywords.split(",") : [],
            media,
            subject,
        });
        
        await tutorial.save();
        res.status(201).json({ message: "Tutorial created successfully", tutorial });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Get all tutorials
export const getAllTutorials = async (req, res) => {
    try {
        const tutorials = await Tutorial.find().populate("subject");
        res.status(200).json(tutorials);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Get a single tutorial by ID
export const getTutorialById = async (req, res) => {
    try {
        const {tut_id} = req.query
        const tutorial = await Tutorial.findOne({tut_id}).populate("subject");
        if (!tutorial) {
            return res.status(404).json({ message: "Tutorial not found" });
        }
        res.status(200).json(tutorial);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// // Update a tutorial
// export const updateTutorial = async (req, res) => {
//     try {
//         const {tut_ids} = req.query
//         const { tut_id, tut_name, tut_des, tut_keywords, subject } = req.body;
//         const media = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : null;

//         const updatedData = {
//             tut_id,
//             tut_name,
//             tut_des,
//             tut_keywords: tut_keywords ? tut_keywords.split(",") : [],
//             subject,
//         };
        
//         if (media) updatedData.media = media;

//         const tutorial = await Tutorial.findOne(req.params.id, updatedData, { new: true });
//         if (!tutorial) {
//             return res.status(404).json({ message: "Tutorial not found" });
//         }
//         res.status(200).json({ message: "Tutorial updated successfully", tutorial });
//     } catch (error) {
//         res.status(500).json({ message: "Internal Server Error", error: error.message });
//     }
// };

// Delete a tutorial
export const deleteTutorial = async (req, res) => {
    try {
        const {tut_id} = req.query
        const tutorial = await Tutorial.findOneAndDelete({tut_id});
        if (!tutorial) {
            return res.status(404).json({ message: "Tutorial not found" });
        }
        res.status(200).json({ message: "Tutorial deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
