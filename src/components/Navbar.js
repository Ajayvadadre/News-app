import React, { Component } from "react";
import "./Navbar.css";
export class Navbar extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white ">
          <div className="container-fluid text-white">
            <a className="navbar-brand text-white" href="/">
              Navbar
            </a>
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
                <a className="nav-link active text-white" aria-current="page" href="/">
                  Home
                </a>
                <a className="nav-link text-white" href="/">
                business
                </a>
                <a className="nav-link text-white" href="/">
                entertainment
                </a>
                <a className="nav-link text-white" aria-disabled="true"  href="/">
                health
                </a>
                <a className="nav-link text-white" aria-disabled="true"  href="/">
                science
                </a>
                <a className="nav-link  text-white " aria-disabled="true"  href="/">
                sports
                </a>
                <a className="nav-link text-white" aria-disabled="true"  href="/">
                technology
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
