import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      <img src={props.image}
        className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{props.name}</p>
        <p className="card-text">{props.upc}</p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;