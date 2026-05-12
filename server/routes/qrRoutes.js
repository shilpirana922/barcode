import express from "express";

import {
  generateQRCodes,
  getAllQRCodes,
  checkQRCode,
} from "../controllers/qrController.js";

const router = express.Router();

router.post("/generate", generateQRCodes);

router.get("/all", getAllQRCodes);

router.get("/:qrId", checkQRCode);

export default router;