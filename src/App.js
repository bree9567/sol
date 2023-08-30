// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/HomeScreen";
import Lawyers from "./screens/LawyersScreen";
import Navbar from "./components/Navbar";
import AreasofFocus from "./screens/AreasofFocus";
import OurResults from "./screens/OurResults"
import Contactus from "./screens/Contactus";
import Form from "./components/Form";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lawyers" element={<Lawyers />} />
          <Route path="/AreasofFocus" element={<AreasofFocus />} />
          <Route path="/OurResults" element={<OurResults />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Form" element={<Form />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
