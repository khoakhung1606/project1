// import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Search from "./Search";

import "./index.css";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
);

ReactDOM.render(<AppRoutes />, document.getElementById("root"));
