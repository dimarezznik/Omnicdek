import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";
import Header from "./components/Header/Header";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path={"/confirm"} element={<ConfirmPage />} />
      </Routes>
    </div>
  );
}

export default App;
