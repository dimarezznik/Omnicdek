import React, { useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";
import ConfirmPage from "./pages/ConfirmPage";
import Layout from "./components/Layout";
import ChoosePackPage from "./pages/ChoosePackPage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchInfoDevice } from "./store/actionCreators";
import { IInfoDevice } from "./types/types";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const dispatch = useAppDispatch();
  const infoDevice = useAppSelector<IInfoDevice | null>(
    (state) => state.boxes.infoDevice
  );

  useEffect(() => {
    dispatch(fetchInfoDevice());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout />}>
          {infoDevice !== null && (
            <Route
              path={`/${infoDevice.data.uid}`}
              element={<GreetingPage />}
            />
          )}
          {infoDevice !== null && (
            <Route
              path={"/"}
              element={<Navigate to={`/${infoDevice.data.uid}`} />}
            />
          )}
          {infoDevice !== null && (
            <Route
              path={`/${infoDevice.data.uid}/confirm`}
              element={<ConfirmPage />}
            />
          )}
          {infoDevice !== null && (
            <Route
              path={`/${infoDevice.data.uid}/boxes`}
              element={<ChoosePackPage />}
            />
          )}
          <Route path={"*"} element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
