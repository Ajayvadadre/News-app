import React, {  useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { Dropdown } from "react-bootstrap"; 

const  Navbar =(props)=>{ 

  const[Contstate,setContstate]=useState("");
  let  apiKey = "27a6e7cf59574d35b24c538ae520479e";

  function updatecountry(country){
    setContstate(country);
    props.onCountryChange(country);
    fetchcountry(country)
    
    
  };
  
  const fetchcountry=(country)=>{
    axios
      .get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          country: country,
          apiKey: apiKey,
        },
      })
      .then((response) => {
        console.log(response.country)
        setContstate(response.country)
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
    };



    return (
      <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white ">
          <div className="container-fluid text-white">
            <Link className="navbar-brand text-white" to="/">
              NewsTime
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
              <Dropdown className="ms-4">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Countries
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { updatecountry("in") }}>India</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{updatecountry("ar")}}>Argentina</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{updatecountry("jp")}}>Japan</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{updatecountry("de")}}>Germany</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{updatecountry("ru")}}>Russia</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{updatecountry("de")}}>Portugal</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{updatecountry("fr")}}>France</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>
          </div>
        </nav>
      </div>
  </>
    );
    };
    
export default Navbar;