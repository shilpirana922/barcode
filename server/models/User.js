import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    qrId: {
      type: String,
      required: true,
    },

    name: String,

    mobile: String,

    email: String,

    drivingLicense: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);