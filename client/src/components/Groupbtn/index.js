import React, { useState, useEffect, useLayoutEffect } from "react";
// import API from "../../utils/API";
import { Search, Bag, BoxSeam } from 'react-bootstrap-icons';
import { useStateWithCallbackLazy } from 'use-state-with-callback'

function Groupbtn(props) {
    const [propsChild, setProp1Link] = useStateWithCallbackLazy(props.upc);
    const [propsChild2, setProp2Link] = useState(props.name);
    // const [googleItems, setGoogleRes] = useState([]);
    // const [googlePriceSearch, setGooglePriceSearch] = useState("");
    const [googleStoreLink, setGoogleLink] = useState("");
    const [amazonStoreLink, setAmazonLink] = useState("");
    const [ebayStoreLink, setEbayLink] = useState("");

    useEffect(() => {

        setProp1Link(props.upc)
        setProp2Link(props.name)
// console.log(`updated`)
        // setGoogleLink("https://www.google.com/search?q=" + propsChild + "&tbm=shop")
        // setAmazonLink("https://www.amazon.com/s?k=" + propsChild2)
        // setEbayLink("https://www.ebay.com/sl/prelist/identify?title=" + propsChild + "&isUid=true")
    }, [props]);


   async function HandleGoogleSearch (event) {
        // event.preventDefault();
       
        // setProp1Link(props.upc)
        
        console.log(propsChild)
        console.log(props.upc)
       
        setGoogleLink("https://www.google.com/search?q=" + propsChild + "&tbm=shop")
        setAmazonLink("https://www.amazon.com/s?k=" + propsChild2)
        setEbayLink("https://www.ebay.com/sl/prelist/identify?title=" + propsChild + "&isUid=true")

    }

    

    return (
        <div className="row px-auto py-2 ">
            <div className=" row btn-group btn-group-lg " role="group" aria-label="Basic example">
                <div className="col text-center">
                    <a id="ex" href={googleStoreLink} >
                        <button
                            onClick={HandleGoogleSearch}
                            type="button"
                            className="btn btn-primary">
                            <Search className="me-2" />
                    Google
                    </button>
                    </a>
                </div>
                <div className="col text-center">
                    <a href={amazonStoreLink}>
                        <button onClick={HandleGoogleSearch} type="button" className="btn btn-primary">
                            <Bag className="me-2" />
                    Amazon
                    </button>
                    </a>
                </div>
                <div className="col text-center">
                    <a href={ebayStoreLink}>
                        <button onClick={HandleGoogleSearch} type="button" className="btn btn-primary">
                            <BoxSeam className="me-2" />
                    eBay
                    </button>
                    </a>
                </div>
                <div {...props}>

                </div>
            </div>

        </div>
    )
}

export default Groupbtn;