import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Search, Bag, BoxSeam } from 'react-bootstrap-icons';

function Groupbtn(props) {

    const [googleItems, setGoogleRes] = useState([]);
    const [googlePriceSearch, setGooglePriceSearch] = useState("");
    const [googleStoreLink, setGoogleLink] = useState("");
    const [amazonStoreLink, setAmazonLink] = useState("");
    const [ebayStoreLink, setEbayLink] = useState("");

    useEffect(() => {
    // const handleGoogleSearch = event => {
    //     event.preventDefault();
        const itemName = "AMD+RYZEN+5+3600X";
        const itemUPC = "730143309912"
        // setGooglePriceSearch(value);
        // API.googleSearch(googlePriceSearch)
        //     .then(res => setGoogleRes(res.data))
        //     .catch(err => console.log(err));
        setGoogleLink("https://www.google.com/search?q=" + itemUPC + "&tbm=shop")
        setAmazonLink("https://www.amazon.com/s?k=" + itemName )
        setEbayLink("https://www.ebay.com/sl/prelist/identify?title=" + itemUPC + "&isUid=true")
        console.log(googleStoreLink)
    }, []);

    return (
        <div className="row px-auto py-2 ">
            <div className=" row btn-group btn-group-lg " role="group" aria-label="Basic example">
                <div className="col text-center">
                    <a href={googleStoreLink} >
                        <button
                            // onClick={handleGoogleSearch}
                            type="button"
                            className="btn btn-primary">
                            <Search className="me-2" />
                    Google
                    </button>
                    </a>
                </div>
                <div className="col text-center">
                    <a href={amazonStoreLink}>
                        <button type="button" className="btn btn-primary">
                            <Bag className="me-2" />
                    Amazon 
                    </button>
                    </a>
                </div>
                <div className="col text-center">
                    <a href={ebayStoreLink}>
                        <button type="button" className="btn btn-primary">
                            <BoxSeam className="me-2" />
                    eBay
                    </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Groupbtn;