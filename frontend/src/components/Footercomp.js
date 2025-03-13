import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        marginTop: "3%",
        marginLeft: "14%",
        height: "10vh",
        color: "#ffffff",
        backgroundColor: "#3f3f3f",
      }}
    >
      <p style={{ marginTop: "2%", fontSize: "22px" }}>
        Created using Jolpica-f1
      </p>
    </div>
  );
};

export default Footer;
