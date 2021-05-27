import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Groupbtn from "../components/Groupbtn";

// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [item, setItem] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    API.getItem(props.match.params.id)
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Groupbtn />
      </Row>
      <Row>
        <h1>
          {item.Name} by {item.UPC}
        </h1>
      </Row>
      <Row>
        <article>
          <h1>Synopsis</h1>
          <p>
            {item.Description}
          </p>
          <img src = {item.Image} alt = {item.Name} />
        </article>
      </Row>
      <Row>
        <Link to="/history">← Back to history</Link>
      </Row>
    </Container>
  );
}


export default Detail;
