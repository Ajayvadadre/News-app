import React, { Component, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";


const  Navbar =(props)=>{ 

  const[Contstate,setContstate]=useState("");
  let  apikey = "27a6e7cf59574d35b24c538ae520479e";

  function updatecountry(country){
    setContstate(country);
    props.onCountryChange(country);
    
    
  };
  
  const fetchcountry=(country)=>{
    axios
      .get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          country: country,
          apiKey: this.apiKey,
        },
      })
      .then((response) => {
        console.log(response.country)
        setContstate(response.country)
      });

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
              



              <div class="btn-group ms-4">
                  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Countries
                </button>
                <div class="dropdown-menu">
                <a className="dropdown-item"  onClick={()=>{updatecountry("in")}} href="#">India</a>
                <a className="dropdown-item"  onClick={()=>{updatecountry("ar")}} href="#">Argentina</a>
                <a className="dropdown-item"  onClick={()=>{updatecountry("jp")}} href="#">Japan</a>
                <a className="dropdown-item"  onClick={()=>{updatecountry("de")}} href="#">Germany</a>
                <a className="dropdown-item"  onClick={()=>{updatecountry("ru")}} href="#">Russia</a>
                <a className="dropdown-item"  onClick={()=>{updatecountry("de")}} href="#">Portigal</a>
                <a className="dropdown-item"  onClick={()=>{updatecountry("fr")}} href="#">France</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  </>
    );
};
    
export default Navbar;
