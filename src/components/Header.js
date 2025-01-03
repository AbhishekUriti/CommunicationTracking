import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Home</Link>
      <Link to="/communication-methods" style={{ color: "#fff", marginRight: "15px" }}>
        Communication Methods
      </Link>
      <Link to="/dashboard" style={{ color: "#fff", marginRight: "15px" }}>Dashboard</Link>
      <Link to="/notifications" style={{ color: "#fff", marginRight: "15px" }}>Notifications</Link>
    </nav>
  );
}

export default Header;
