import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Scanbtn from "../components/Scanbtn";


function Main() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="col-4">
                        <Scanbtn />
                    </Column>

                </Row>
            </Container>
        </div>
    );
}

export default Main;
