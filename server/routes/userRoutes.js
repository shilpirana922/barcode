import express from "express";

import {
  registerUser,
  getUserByQr,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/:qrId", getUserByQr);

export default router;