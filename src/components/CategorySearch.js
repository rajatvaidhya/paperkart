import React from "react";
import "./CategorySearch.css";
import CategoryCards from "./CategoryCards";
import { data } from "../data";

const CategorySearch = () => {
  return (
    <div className="category-search-container">
      <h1>
        <span style={{ color: "black" }}>Category</span> Search
      </h1>

      <div className="category-cards-grid">
        {data.map((category) => (
          <CategoryCards
            key={category.id}
            title={category.title}
            src={category.image}
            parts={category.parts}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
