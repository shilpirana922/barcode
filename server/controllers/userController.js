import User from "../models/User.js";
import QrCode from "../models/QrCode.js";

export const registerUser = async (req, res) => {
  try {
    const { qrId, name, mobile, email, drivingLicense } = req.body;

    const qr = await QrCode.findOne({ qrId });

    if (!qr) {
      return res.status(404).json({
        message: "QR not found",
      });
    }

    if (qr.assigned) {
      return res.status(400).json({
        message: "QR already used",
      });
    }

    const user = await User.create({
      qrId,
      name,
      mobile,
      email,
      drivingLicense,
    });

    qr.assigned = true;
    qr.user = user._id;

    await qr.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUserByQr = async (req, res) => {
  try {
    const user = await User.findOne({
      qrId: req.params.qrId,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};