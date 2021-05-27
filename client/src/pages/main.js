import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Scanbtn from "../components/Scanbtn";
import Background from"../img/BG2.jpg";
import "./main.css";


function Main() {
    return (
        
        <div style={{backgroundImage:`url(${Background})`}} className="al-fullscreen al-background">
            {/* <Container  >  */}
                <div class=" d-flex w-100 h-100 p-3 mx-auto flex-column text-center" >
                    
                    <main class="mx-auto">
                        <h1>Spot Check</h1>
                        <p class="lead">a new way to shop</p>
                        
                    </main>
                <Row className="mx-auto">
                    <Column size="col-4">
                    <a className="dropdown-item" href="/scanner">
                        <Scanbtn />
                        </a>
                    </Column>

                </Row>

                </div>
            {/* </Container> */}
        </div>
    );
}

export default Main;
