import React, { Component, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


const  Navbar =()=>{ 

  const[contstate,setContstate]=useState()

  function updatecountry(country){
    setContstate(country);
    fetchcountry(country);
  };
  
  const fetchcountry=(country)=>{


  }
    return (
      <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white ">
          <div className="container-fluid text-white">
            <Link className="navbar-brand text-white" to="/">
              NEWS
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
              
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Dropdown link
              </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" onClick={updatecountry("ae")} href="#">United Arab Emirates</a>
                <a class="dropdown-item" href="#">Argentina</a>
                <a class="dropdown-item" href="#">Australia</a>
                <a class="dropdown-item" href="#">Belgium</a>
                <a class="dropdown-item" href="#">Bulgaria</a>
                <a class="dropdown-item" href="#">Brazil</a>
                <a class="dropdown-item" href="#">Canada</a>
                <a class="dropdown-item" href="#">Switzerland</a>
                <a class="dropdown-item" href="#">China</a>
                <a class="dropdown-item" href="#">Colombia</a>
                <a class="dropdown-item" href="#">Czech Republic</a>
                <a class="dropdown-item" href="#">Germany</a>
               </div>
              </li>
            </div>
          </div>
        </nav>
      </div>
  </>
    );
};
    
export default Navbar;
