import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
import Row from "../components/Row";
import API from "../utils/API";
import { BoxArrowRight } from 'react-bootstrap-icons';
import Nav from "../components/Navbar";
import Background from "../img/BG2.jpg";
import "./main.css";
function History() {
    const [history, setHistory] = useState([])

    useEffect(() => {
        loadHistory()
    }, [])

    function loadHistory() {
        API.getHistory()
            .then(res =>
                setHistory(res.data)
            )
            .catch(err => console.log(err));
        console.log(history)
    };

    return (
        <Container className="py-auto px-auto">
            <Nav />
            <div >
                <div>
                <Row className="py-4">
                    {history.length ? (
                        <List>
                            {history.map(item => {
                                return (
                                    <ListItem key={item._id}>

                                        <Row>
                                            <div className="col">
                                                <a href={"/details/" + item._id}>
                                                    <strong>
                                                        {item.Name}
                                                    </strong>
                                                </a>
                                                <div>
                                                    UPC: {item.UPC}
                                                </div>
                                            </div>
                                            <div className="col-1 my-auto">
                                                <a href={"/details/" + item._id}>
                                                    <BoxArrowRight />
                                                </a>
                                            </div>
                                        </Row>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                        <h3>History not found. Start scanning!</h3>
                    )}
                </Row>
                </div>
            </div>
        </Container>
    );
}

export default History;