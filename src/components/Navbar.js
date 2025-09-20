import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const location = useLocation();

  // Decide where "Home" should go based on current path
  const homeTarget = location.pathname === "/" ? "/home" : "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          LOGO
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Toggle Home */}
            <li className="nav-item mx-3">
              <Link className="nav-link fw-medium text-dark" to={homeTarget}>
                Home
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link fw-medium text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-medium text-dark" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
