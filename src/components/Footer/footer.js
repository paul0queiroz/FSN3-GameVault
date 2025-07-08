import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      padding: "2rem 0",
      textAlign: "center",
    }}
  >
    <div>
      <h3 style={{ margin: 0, fontWeight: 600 }}>GameVault</h3>
      <p style={{ margin: "0.5rem 0" }}>
        &copy; {new Date().getFullYear()} GameVault. All rights reserved.
      </p>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        Your retro games e-commerce destination!
      </p>
    </div>
  </footer>
);

export default Footer;
