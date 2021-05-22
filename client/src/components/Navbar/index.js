import React from "react";
import ScriptTag from 'react-script-tag';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
            <ScriptTag src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
                crossorigin="anonymous"></ScriptTag>

            <button classNameclassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
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
            </div>
            <h1>Spot-Check</h1>
        </nav>
    )
}

export default Navbar;