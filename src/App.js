import React from "react";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
