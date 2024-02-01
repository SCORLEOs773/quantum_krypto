import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import QuantumHub from "./components/QuantumHub";
import Error404 from "./components/Error404";

function App() {
  const appStyle = {
    backgroundColor: "#090419",
    minHeight: "100vh",
  };

  return (
    <div className="App" style={appStyle}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<QuantumHub />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
