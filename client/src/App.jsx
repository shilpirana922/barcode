import { Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import ScanHandler from "./pages/ScanHandler";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />

      <Route path="/scan/:qrId" element={<ScanHandler />} />

      <Route path="/register/:qrId" element={<Register />} />

      <Route path="/profile/:qrId" element={<Profile />} />
    </Routes>
  );
}

export default App;