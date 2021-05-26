import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
import Row from "../components/Row";
import API from "../utils/API";

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
        <Container>
            <Row>
                {history.length ? (
                    <List>
                        {history.map(item => {
                            return (
                                <ListItem key={item._id}>
                                    <a href={"/history/" + item._id}>
                                        <strong>
                                            {item.Name} UPC: {item.UPC}
                                        </strong>
                                    </a>
                                </ListItem>
                            );
                        })}
                    </List>
                ) : (
                    <h3>History not found. Start scanning!</h3>
                 )}  
            </Row>
        </Container>
    );
}

export default History;