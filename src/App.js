import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsPage from "./components/NewsPage";
// import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "in",
    };
  }



  handleCountryChange = (country) => {
    this.setState({ selectedCountry: country} ,()=>{ console.log("selected:",this.state.selectedCountry)});

  };


  apikey = "27a6e7cf59574d35b24c538ae520479e";
  render() {


    console.log("APP",this.state.selectedCountry)
    return (
      <Router>
        <Navbar onCountryChange={this.handleCountryChange} />
        <Routes>
        <Route
            path="/"
            element={
              <NewsPage
                key=""
                country={this.state.selectedCountry}
                apiKey={this.apikey}
                pageSize={9}
                category="general"
              />
            }
          />
          <Route
            path="/"
            element={
              <NewsPage  key="" country="in" apiKey={this.apikey} pageSize={9} category="general"/>
            }
          />
          <Route
            path="/business"
            element={
              <NewsPage
                key="business"
                country="in"
                apiKey={this.apikey}
                pageSize={9}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <NewsPage
                key="entertainment"
                country="in"
                apiKey={this.apikey}
                pageSize={9}
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <NewsPage
                key="health"
                country="in"
                apiKey={this.apikey}
                pageSize={9}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <NewsPage
                key="science"
                country="in"
                apiKey={this.apikey}
                pageSize={9}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <NewsPage
                key="sports"
                country="in"
                apiKey={this.apikey}
                pageSize={9}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <NewsPage
                key="technology"
                country="in"
                apiKey={this.apikey}
                pageSize={9}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
