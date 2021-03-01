/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import logo from './img/logo.png'

const Navbar = () => {
  return (
    <>
    <div id="navbar">
      <nav className="navbar sticky-top navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <NavLink
            exact
            activeClassName="active_menu"
            className="navbar-brand d-flex justify-content-center"
            to="/"
          >
            {/* <img className="" src="https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="" height="30"/> */}
            <img className="" src={logo} alt="" height="30"/>
            Aastha Elevators
          </NavLink>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  className="nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  className="nav-link"
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
