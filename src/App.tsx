import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Greeting from "./pages/Greeting";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
