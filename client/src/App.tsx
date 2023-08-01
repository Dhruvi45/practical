import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MyRoutes from "./Routes/MyRoutes";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
