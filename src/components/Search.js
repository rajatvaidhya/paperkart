import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div
        className="search"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15rem",
        }}
      >
        <form>
          <div
            className="search-input"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <input
              type="text"
              placeholder="Search for spare parts..."
              name="search"
              style={{ fontSize: "1.3rem", border: "none" }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                display: "flex",
                marginLeft: "3rem",
                alignItems: "center",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            ></i>
            <i
              className="fa-solid fa-camera"
              style={{
                display: "flex",
                marginLeft: "3rem",
                alignItems: "center",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            ></i>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
