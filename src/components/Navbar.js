import React from "react";
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  let location = useLocation();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <div className="container-fluid">
            <Link className="navbar-brand text-primary" to="/">
              Online Code Editor
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/" ? 'active': ""}`} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/webeditor" ? 'active': ""}`} aria-current="page" to="/webeditor">
                    Web Editor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/custom" ? 'active': ""}`} aria-current="page" to="/custom">
                    Custom Editor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/about" ? 'active': ""}`} aria-current="page" to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
