import Project from "../models/project.model.js";
import cloudinary from "../config/cloudinary.js";
import { cropImage } from "../utils/imageCrop.js";

export const getProjects = async (_req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name || !description || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const croppedBuffer = await cropImage(req.file.buffer);

    const uploadResult = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${croppedBuffer.toString("base64")}`,
      { folder: "projects" }
    );

    const project = await Project.create({
      name,
      description,
      image: uploadResult.secure_url,
    });

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};
