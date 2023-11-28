import React, { Component } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export class Navbar extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white ">
          <div className="container-fluid text-white">
            <Link className="navbar-brand text-white" to="/">
              News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex justify-content-center me-5" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link text-white" to="/business">
                business
                </NavLink>
                <NavLink className="nav-link text-white" to="/entertainment">
                entertainment
                </NavLink>
                <NavLink className="nav-link text-white" to="/health">
                health
                </NavLink>
                <NavLink className="nav-link text-white" to="/science">
                science
                </NavLink>
                <NavLink className="nav-link  text-white" to="/sports">
                sports
                </NavLink>
                <NavLink className="nav-link text-white" to="/technology">
                technology
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
