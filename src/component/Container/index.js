import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Container = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="header">
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
      </div>
      <div
        style={{
          margin: 15,
          position: "relative",
          minHeight: "100%",
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          padding: 10,
        }}
      >
        <span style={{ color: "#143742" }}>Made with CSS only and </span>{" "}
        <span role="img" aria-label="emoji">
          💚
        </span>
      </div>
    </div>
  );
};

export default Container;
