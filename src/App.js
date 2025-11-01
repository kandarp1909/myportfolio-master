import React from "react";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";

function App() {
  return (
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
    >
      <Header />
      {/* <Experience /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Skills />} /> */}
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
