import Client from "../models/client.model.js";
import cloudinary from "../config/cloudinary.js";
import { cropImage } from "../utils/imageCrop.js";

export const getClients = async (_req, res, next) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

export const createClient = async (req, res, next) => {
  try {
    const { name, designation, description } = req.body;

    if (!name || !designation || !description || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const croppedBuffer = await cropImage(req.file.buffer);

    const uploadResult = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${croppedBuffer.toString("base64")}`,
      { folder: "clients" }
    );

    const client = await Client.create({
      name,
      designation,
      description,
      image: uploadResult.secure_url,
    });

    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
};
