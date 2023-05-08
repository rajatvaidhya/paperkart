import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar"
import Card2 from "./Card2";

const PartsPartPage = () => {
  const { state } = useLocation();
  const { title } = useParams();
  const parts = state;
  console.log(parts);
  return (
    <>
    <Navbar/>
    <div className="category-search-container">
      <h1>
        <span style={{ color: "black" }}>{title}</span>
        <div style={{borderBottom:'2px solid red', margin:'auto', width:'15%', marginTop:'1rem'}}></div>
      </h1>

      <div className="category-cards-grid">
        {parts.map((part) => (
          <Card2
            Itemkey={part.id}
            title={part.title}
            image={part.image}
            description={part.description}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default PartsPartPage;
