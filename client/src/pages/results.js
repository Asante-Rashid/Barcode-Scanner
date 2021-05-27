// import React, { useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Card from "../components/Card";
import Groupbtn from "../components/Groupbtn";
// import API from "../utils/API"


function Results() {

    // const [scan, setScan] = useState([])
    // const [formObject, setFormObject] = useState({})

    // function loadScan() {
    //     API.getBarcode()
    //     .then(res => setScan(res.data))
    //     .catch(err => console.log(err))
    // };

    return (
        <div>
            <Container>
                <Row>
                    <Groupbtn />
                </Row>
                <Row>
                    <Column size="col-4">
                        <Card />

                    </Column>

                </Row>
            </Container>
        </div>
    );
}

export default Results;