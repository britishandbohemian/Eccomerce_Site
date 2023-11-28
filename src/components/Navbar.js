import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <h1>Signs4SA</h1>
          <span>.</span>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="blog.html">News</a>
            </li>
            <li className="dropdown has-dropdown">
              <a href="#">
                <span>Signage</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul className="dd-box-shadow">
                <li></li>
                {/* <li className="dropdown has-dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul className="dd-box-shadow">
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/shop">Outdoor Signs</Link>
                </li>
                <li>
                  <Link to="/shop">Indoor Signs</Link>
                </li>
                <li>
                  <a href="#">Building Signs</a>
                </li>
                <li>
                  <a href="#">Promotional Signs</a>
                </li>
                <li>
                  <a href="#">Vehicle Branding</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="index.html#contact">Contact</a>
            </li>
          </ul>

          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a className="btn-getstarted" href="index.html#about">
          Contact us Today
        </a>
      </div>
    </header>
  );
};
export default Navbar;
