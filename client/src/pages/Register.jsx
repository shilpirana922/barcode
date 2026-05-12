import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../api/axios";

function Register() {
  const { qrId } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    drivingLicense: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await api.post("/users/register", {
        qrId,
        ...form,
      });

      navigate(`/profile/${qrId}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register User</h1>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="mobile"
        placeholder="Mobile"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="drivingLicense"
        placeholder="Driving License"
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Register;