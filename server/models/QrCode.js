import mongoose from "mongoose";

const qrCodeSchema = new mongoose.Schema(
  {
    qrId: {
      type: String,
      required: true,
      unique: true,
    },

    assigned: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("QrCode", qrCodeSchema);