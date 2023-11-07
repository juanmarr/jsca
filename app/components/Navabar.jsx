"use client"

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Navabar = () => {

    useEffect(() => {

        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])

  return (
    <>
      {/* bg-body-tertiary */}
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <Link href='/' className="nav-link active">Navabar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link href='/' className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link href='/EventHistory' className="nav-link active">Event</Link>
              </li>
              <li className="nav-item">
                <Link href='/People' className="nav-link active">UserView</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*- - - - - - - - - - - - -  - -*/}















      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <Link href='/' className="nav-link active">Navabar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-5">
              <li className="nav-item">
                <Link href='/' className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link href='/EventHistory' className="nav-link active">Event</Link>
              </li>
              <li className="nav-item">
                <Link href='/People' className="nav-link active">UserView</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* ---------------- */}


     
    </>
  );
};

export default Navabar;
