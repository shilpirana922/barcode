import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../api/axios";

function ScanHandler() {
  const { qrId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    checkQR();
  }, []);

  const checkQR = async () => {
    try {
      const response = await api.get(`/qr/${qrId}`);

      if (response.data.assigned) {
        navigate(`/profile/${qrId}`);
      } else {
        navigate(`/register/${qrId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <h2>Checking QR...</h2>;
}

export default ScanHandler;