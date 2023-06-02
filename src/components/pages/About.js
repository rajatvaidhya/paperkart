import React from "react";
import Navbar from "../Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="main-about-container">
        <h1 style={{ color: "black" }}>About Us</h1>
        <div
          style={{
            borderBottom: "2px solid red",
            margin: "auto",
            width: "8%",
            marginTop: "1rem",
          }}
        ></div>
      </div>
    </>
  );
};

export default About;
