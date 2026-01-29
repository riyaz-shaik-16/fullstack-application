import express from "express";
import upload from "../middlewares/multer.middleware.js";
import {
  getClients,
  createClient,
} from "../controllers/client.controller.js";

const router = express.Router();

router.get("/", getClients);
router.post("/", upload.single("image"), createClient);

export default router;
