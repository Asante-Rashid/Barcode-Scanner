import React from "react";

function Card(props) {
    return (
        <div
        className="card"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
      >
         <img src="data:image/jpeg;base64,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"
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Name:</p>
                        <p className="card-text">UPC:</p>
                    </div>
      </div>
    );
}

export default Card;