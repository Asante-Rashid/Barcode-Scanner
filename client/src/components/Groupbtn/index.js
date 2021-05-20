import React from "react";
import { Search , Bag, BoxSeam} from 'react-bootstrap-icons';

function Groupbtn(props) {


    return (
        <div class="row px-auto py-2 text-center">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <div class="col">
                    <a href="https://www.google.com">
                    <button type="button" className="btn btn-primary">
                    <Search className="me-2"/>
                    Search
                    </button>
                    </a>
                </div>
                <div class="col">
                <a href="https://www.amazon.com">
                    <button type="button" className="btn btn-primary">
                    <Bag className="me-2"/>
                    Buy
                    </button>
                    </a>
                </div>
                <div class="col">
                <a href="https://www.ebay.com">
                    <button type="button" className="btn btn-primary">
                    <BoxSeam className="me-2"/>
                    Sell
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Groupbtn;