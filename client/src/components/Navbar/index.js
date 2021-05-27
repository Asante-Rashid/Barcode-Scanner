import React from "react";
import ScriptTag from 'react-script-tag';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
            <ScriptTag src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
                crossOrigin="anonymous"></ScriptTag>

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                         </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/">Main</a></li>
                            <li><a className="dropdown-item" href="/results">Results</a></li>
                            <li><a className="dropdown-item" href="/scanner">Quagga Scanner</a></li>
                            <li><a className="dropdown-item" href="/history">History</a></li>
                        </ul>
                    </li>
                </ul>
            </div> */}

            <button className="navbar-toggler" type="button">
            <a class="navbar-toggler-icon" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">

            </a>
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                   
                    <ul class="list-group list-group-flush" >
                        {/* <li><a className="dropdown-item" href="/results">Results</a></li> */}
                        <a className="list-group-item list-group-item-light" href="/scanner">Scan Barcode</a>
                        <a className="list-group-item list-group-item-light"  href="/history">History</a>
                        <a className="list-group-item list-group-item-light" href="/">Exit</a>
                    </ul>

                </div>
            </div>


            <h1 className = "px-3">Spot-Check</h1>



        </nav>
    )
}

export default Navbar;