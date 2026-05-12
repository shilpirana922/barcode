import QrCode from "../models/QrCode.js";
export const generateQRCodes = async (req, res) => {
  try {
    const existingQrs = await QrCode.find();

    // already generated
    if (existingQrs.length > 0) {
      return res.json(existingQrs);
    }

    const qrCodes = [];

    for (let i = 1; i <= 20; i++) {
      qrCodes.push({
        qrId: `QR${String(i).padStart(3, "0")}`,
      });
    }

    const savedQrs = await QrCode.insertMany(qrCodes);

    res.json(savedQrs);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllQRCodes = async (req, res) => {
  try {
    const qrCodes = await QrCode.find();

    res.json(qrCodes);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const checkQRCode = async (req, res) => {
  try {
    const qr = await QrCode.findOne({
      qrId: req.params.qrId,
    });

    if (!qr) {
      return res.status(404).json({
        message: "QR Code not found",
      });
    }

    res.json(qr);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};