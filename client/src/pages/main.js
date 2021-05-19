import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Scanbtn from "../components/Scanbtn";
import Navbar from "../components/Navbar";

function Main() {
    return (
        <div>
            <Container>
                {/* <Navbar /> */}
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
