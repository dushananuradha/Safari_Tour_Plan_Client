import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">fuck</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/About Us">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Tour Sites and Guides">Tour Sites and Guides</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Contact Us">Contact Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Gallery">Gallery</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Type here to search. . ." aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;