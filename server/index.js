import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import qrRoutes from "./routes/qrRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/qr", qrRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});