import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RouteData } from "./RouterData";
import Header from "../ShareModule/Header/Header";
import Navbar from "../ShareModule/Navbar/Navbar";
import Footer from "../ShareModule/Footer/Footer";

import BackTop from "../ShareModule/BackTop/BackTop";
import MobileMenu from "../ShareModule/MobileMenu/MobileMenu";



export default function Rout() {

  return (
    <>
      <div className="body">
        <Router>
          <Header />
          <Navbar />
          <MobileMenu />
          <Routes>
            {RouteData.map(({ element, path }, idx) => (
              <Route path={path} element={element} key={idx} />
            ))}
          </Routes>
          <Footer />
          <BackTop/>
        </Router>
      </div>
    </>
  );
}
