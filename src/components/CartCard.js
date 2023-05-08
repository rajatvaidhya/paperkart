import React from "react";
import "./CartCard.css";

const CartCard = (props) => {
  const handleRemoveItem = async () => {
    const response = fetch(
      `http://localhost:5000/api/items/removeItem/${props.ItemKey}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    window.location.reload();
    alert("Item Removed Succesfully!");
  };

  return (
    <div className="card cart-card">
      <div className="card-design">
        <img src={props.image} alt="card-image" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{ textAlign: "left", marginLeft: "2rem", fontSize: "2rem" }}
          >
            {props.title}
          </h2>
          <h2
            style={{ marginRight: "2rem", color: "green", fontSize: "1.7rem" }}
          >
            $3.44
          </h2>
        </div>
        <h4
          style={{
            textAlign: "left",
            marginLeft: "2rem",
            marginTop: "0.4rem",
            fontSize: "1.3rem",
          }}
        >
          {props.description}
        </h4>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "auto",
            gap: "1rem",
          }}
        >
          <button
            className="btn"
            style={{
              marginTop: "2rem",
              width: "90%",
              marginBottom: "2rem",
              fontSize: "1.2rem",
            }}
          >
            <i
              className="fas fa-shopping-bag"
              style={{ marginRight: "1rem" }}
            ></i>
            Buy This Product
          </button>
          <button
            className="btn"
            style={{
              marginTop: "2rem",
              width: "90%",
              marginBottom: "2rem",
              fontSize: "1.2rem",
              backgroundColor: "white",
              border: "1px solid red",
              color: "red",
            }}
            onClick={handleRemoveItem}
          >
            <i
              className="fa-solid fa-circle-minus"
              style={{ marginRight: "1rem" }}
            ></i>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
