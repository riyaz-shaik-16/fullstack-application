import express from "express";
import upload from "../middlewares/multer.middleware.js";
import {
  getProjects,
  createProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", upload.single("image"), createProject);

export default router;
