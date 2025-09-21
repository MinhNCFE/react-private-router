import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<PrivateRouter />}>
          <Route index element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
