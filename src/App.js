import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsPage from "./components/NewsPage";
// import Spinner from "./components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_API_KEY;

  const [country, setCountry] = useState("in");

  const changeCountry = (country) => {
    setCountry(country);
  };

  return (
    <Router>
      <Navbar country={country} changeCountry={changeCountry} />
      <Routes>
        <Route
          path="/"
          element={
            <NewsPage
              key=""
              country={country}
              apiKey={apikey}
              pageSize={9}
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <NewsPage
              key="business"
              country={country}
              apiKey={apikey}
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
              country={country}
              apiKey={apikey}
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
              country={country}
              apiKey={apikey}
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
              country={country}
              apiKey={apikey}
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
              country={country}
              apiKey={apikey}
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
              country={country}
              apiKey={apikey}
              pageSize={9}
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
