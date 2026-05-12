import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#111", color: "white" }}>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;