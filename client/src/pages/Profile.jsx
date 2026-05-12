import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function Profile() {
  const { qrId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/users/${qrId}`).then((res) => {
      setUser(res.data);
    });
  }, [qrId]);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: 20 }}>
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>
      <p>Mobile: {user.mobile}</p>
      <p>Email: {user.email}</p>
      <p>License: {user.drivingLicense}</p>
    </div>
  );
}

export default Profile;