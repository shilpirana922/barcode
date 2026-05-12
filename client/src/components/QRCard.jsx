import { QRCodeCanvas } from "qrcode.react";

function QRCard({ qrId }) {
 const qrUrl = `https://personal-details-barcode.netlify.app/scan/${qrId}`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 20,
        margin: 20,
        width: 250,
      }}
    >
      <h3>{qrId}</h3>

      <QRCodeCanvas value={qrUrl} size={200} />

      <p>Scan Me</p>
    </div>
  );
}

export default QRCard;
