import { useEffect, useState } from "react";

import api from "../api/axios";

import QRCard from "../components/QRCard.jsx";

function Admin() {
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    fetchQRCodes();
  }, []);

  const fetchQRCodes = async () => {
    try {
      const response = await api.get("/qr/all");

      setQrCodes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateQRCodes = async () => {
    try {
      await api.post("/qr/generate");

      fetchQRCodes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin QR Dashboard</h1>

      <button onClick={generateQRCodes}>
        Generate QR Codes
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {qrCodes.map((qr) => (
          <QRCard key={qr._id} qrId={qr.qrId} />
        ))}
      </div>
    </div>
  );
}

export default Admin;