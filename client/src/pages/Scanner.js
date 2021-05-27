import Container from "../components/Container"
import React, { Component, Fragment } from 'react'
// , useState, useEffect
import Quagga from 'quagga'
import API from "../utils/API";
import { Fullscreen } from 'react-bootstrap-icons';
import "./scanner.css";
import Nav from "../components/Navbar";
import Background from "../img/BG2.jpg";

// function Scan() {
//   const [scan, setItem] = useState({});

//   function loadScan() {
//     API.getBarcode()
//       .then(res =>
//         setItem(res.data)
//       )
//       .catch(err => console.log(err));
//   };
//   useEffect(() => {
//     loadScan()
//   }, [])
// }
// Scan()

class Scanner extends Component {
  state = {
    results: "",
  };


  componentDidMount() {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: '790',
          height: '490'
        },
        numberOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector('#barcodeScan')
      },
      locate: true,
      decoder: {
        readers: ["code_128_reader", "upc_reader", "upc_e_reader"]
      }
    }, function (err) {
      if (err) {
        return
      }
      Quagga.start()
    })
    Quagga.onDetected(this.onDetect)

  }

  onDetect(res) {
    // console.log(res.codeResult.code)
    // Quagga.offProcessed()
    // console.log(res.codeResult.code)
    // Scan(res)
    // console.log(res)
    const code = res.codeResult.code
    const code2 = res.codeResult.code
    if (code === code2) {
      Quagga.stop()
    }
    console.log(code)
    API.getBarcode(code)
      .then(res => {

        const scan = res.data[0];
        // this.setState({results: res.data[0]})
        API.saveItem({
          Name: scan.title,
          UPC: code,
          Image: scan.imageUrl,
          Description: scan.subtitle
        })
        console.log(scan);
      })
    // this.setState({results: res.codeResult.code})
    // console.log(this.state.results)
  }

  render() {
    return (

      <Container className="py-auto px-auto">
        <Nav />
        <div  className=" al-fullscreen card bg-none text-white text-center py-4">
          <Fragment >
            <div id="barcodeScan"></div>
          </Fragment>
          <div className="card-img-overlay  al-fullscreen">
            <Fullscreen />
          </div>
        </div>
      </Container>

    )
  }
}

export default Scanner