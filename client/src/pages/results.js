// import React, { useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Card from "../components/Card";
import Groupbtn from "../components/Groupbtn";
import Nav from "../components/Navbar";
import Background from"../img/BG2.jpg";
// import API from "../utils/API"
import "./main.css";

function Results() {

    // const [scan, setScan] = useState([])
    // const [formObject, setFormObject] = useState({})

    // function loadScan() {
    //     API.getBarcode()
    //     .then(res => setScan(res.data))
    //     .catch(err => console.log(err))
    // };

    return (
        <div style={{backgroundImage:`url(${Background})`}} className="al-fullscreen al-background">
             <Nav />
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