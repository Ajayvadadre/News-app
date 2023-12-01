import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { NavDropdown } from "react-bootstrap";

const Navbar = (props) => {
  function handleCountry(e) {
    props.changeCountry(e.target.value);
  }

  const theme = useContext(ThemeContext);
  // theme.update()
  console.log(theme.state.mode);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container-fluid text-white">
          <Link className="navbar-brand text-white" to="/">
            News
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex justify-content-center me-5"
            id="navbarNavAltMarkup"
          >
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
            <div className="navbar-nav bg-primary bg-gradient text-danger rounded-3 p-1" style={{color: 'red'}}>
              <NavDropdown
                
                title="Dropdown link"
                id="basic-nav-dropdown "
              >
                <NavDropdown.Item onChange={handleCountry} value="in">
                  India
                </NavDropdown.Item>
                <NavDropdown.Item onChange={handleCountry} value="us">
                  United States of America
                </NavDropdown.Item>
                <NavDropdown.Item onChange={handleCountry} value="jp">
                  Japan
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
