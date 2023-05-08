import React from "react";
import "./CategorySearch.css";
import PartCard from "./PartCard";
import Navbar from "./Navbar"
import { useLocation, useParams } from "react-router-dom";

const CategoryPart = (props) => {
  const { title } = useParams();
  const { state } = useLocation();
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
          <PartCard
            key={part.id}
            title={part.title}
            src={part.image}
            parts={part.parts}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default CategoryPart;
