import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Nav from "../components/Navbar";
import Groupbtn from "../components/Groupbtn";
import Background from "../img/BG2.jpg";

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
    <Container className="py-auto px-auto" fluid="true" >
     <Nav />
             <div >

      <Row className="py-4 mx-auto">

        <div className="col-sm-10 mx-auto">
          <div className="card w-75 mx-auto" >
            <div className="card-header text-center">
              <Groupbtn
                name={item.Name}
                upc={item.UPC}
              />

            </div>
            <div className="card-body">
              <h5 className="card-title">{item.Name}</h5>
            <img src={item.Image} className="card-img-top p-3" alt={item.Name} />
              <p className="card-text">{item.Description}</p>
            </div>
            <div className="card-body">
              <Link to="/history">← Back to history</Link>
              {/* <a href="#" class="card-link">← Back to history</a> */}
            </div>
          </div>
        </div>

      </Row>
      </div>

    </Container>
  );
}


export default Detail;
