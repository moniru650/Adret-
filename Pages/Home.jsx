import React, { useEffect, useState } from "react";
import { CountUp } from "countup.js";
// import OwlCarousel from 'react-owl-carousel';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/owl.carousel.min.css";
import MobileMenu from '../ShareModule/MobileMenu/MobileMenu';
import Banner from '../Component/Banner/Banner';
import OurClient from '../Component/OurClient/OurClient';
import Feature from './Feature/Feature';
import WantWork from './WantWork/WantWork';
import About from './About/About';
import GetInTouch from './GetInTouch/GetInTouch';
import Map from './Map/Map';
import Slider from '../Component/Slider/Slider'
import Clients from "../Component/Clients/Clients";


export default function Home() {
    useEffect(() => {
        AOS.init();
    
        const countUpOptions = {
          duration: 2,
        };
    
        const countElements = document.querySelectorAll(".count");
    
        countElements.forEach((element) => {
          const countUp = new CountUp(
            element,
            element.dataset.target,
            countUpOptions
          );
          element.addEventListener("aos:in", () => countUp.start());
        });
    
        const toggleHeight = window.outerHeight * 2;
    
        const handleScroll = () => {
          const mBackToTop = document.querySelector(".m-backtotop");
    
          if (window.scrollY > toggleHeight) {
            mBackToTop.classList.add("active");
          } else {
            mBackToTop.classList.remove("active");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <>
      <Banner />
      <OurClient/>
      <Feature/>
      <WantWork/>
      <Slider />
      <About/>
      <GetInTouch/>
      <Map/>
    </>
  )
}
