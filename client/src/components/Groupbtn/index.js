import React, { useState } from "react";
import API from "../../utils/API";
import { Search, Bag, BoxSeam } from 'react-bootstrap-icons';

function Groupbtn(props) {

    const [googleItems, setGoogleRes] = useState([]);
    const [googlePriceSearch, setGooglePriceSearch] = useState("");

    const handleGoogleSearch = event => {
        event.preventDefault();
        const { value } = "ipod";
        setGooglePriceSearch(value);
        API.googleSearch(googlePriceSearch)
            .then(res => setGoogleRes(res.data))
            .catch(err => console.log(err));
        console.log(googleItems)
    };

    return (
        <div className="row px-auto py-2 text-center">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <div className="col">
                    {/* <a href="https://www.google.com"> */}
                    <button
                        onClick={handleGoogleSearch}
                        type="button"
                        className="btn btn-primary">
                        <Search className="me-2" />
                    Search
                    </button>
                    {/* </a> */}
                </div>
                <div className="col">
                    <a href="https://www.amazon.com">
                        <button type="button" className="btn btn-primary">
                            <Bag className="me-2" />
                    Buy
                    </button>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.ebay.com">
                        <button type="button" className="btn btn-primary">
                            <BoxSeam className="me-2" />
                    Sell
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Groupbtn;