import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader";
import SubHeader from "./Components/Header/SubHeader";

function App() {
  return (
    <>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
