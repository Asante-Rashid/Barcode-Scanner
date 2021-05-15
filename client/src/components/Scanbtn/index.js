import React from "react";

function Scanbtn(props) {
    return (
        <button onClick={props.onClick} className={`btn btn-primary ${props["data-value"]}`} {...props} />
    );
}

export default Scanbtn;
