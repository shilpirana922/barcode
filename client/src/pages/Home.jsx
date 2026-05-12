import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGenerate = () => {
    const qrId = Math.random().toString(36).substring(2, 8);
    navigate(`/register/${qrId}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Smart QR System</h2>

      <button onClick={handleGenerate}>
        Generate QR & Register User
      </button>
    </div>
  );
}

export default Home;