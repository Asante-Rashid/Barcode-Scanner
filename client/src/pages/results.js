import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Card from "../components/Card";
import Groupbtn from "../components/Groupbtn";


function Results() {
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