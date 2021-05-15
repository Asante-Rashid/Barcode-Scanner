import React from "react";

function Card(props) {
    return (
        <div
        className="card"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
      >
      </div>
    );
}

export default Card;