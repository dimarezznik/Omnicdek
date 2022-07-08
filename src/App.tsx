import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";
import ConfirmPage from "./pages/ConfirmPage";
import Layout from "./components/Layout";
import ChoosePackPage from "./pages/ChoosePackPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<GreetingPage />} />
          <Route path={"/confirm"} element={<ConfirmPage />} />
          <Route path={"/boxes"} element={<ChoosePackPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
