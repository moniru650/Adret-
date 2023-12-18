import React, { useState, useEffect } from "react";
import Counter from "./Counter";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_heading">
                <h1 data-aos="fade-up" data-aos-duration="2000">
                  At Adret Software,
                </h1>
                <h3  data-aos="fade-up" data-aos-duration="2000">Transform Dreams into Reality.</h3>
                <p data-aos="fade-up" data-aos-duration="2500">
                Adret Software Services is one of the leading companies in the web and software development industry. We have a team of seasoned skills and creative minds who are deft at providing perfect web solutions to give you a competitive edge.
                 
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="btn_sec"
                >
                  <a href="" className="btn1">
                    Request A Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="banner_btm">
                <div className="row justify-content-lg-start justify-content-sm-center justify-content-center">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div
                      class="banner_con company_rating"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <img src="assets/image/banner-icon1.png" alt="" />
                      <Counter maxCount={100} interval={20} />
                      <p>Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div
                      class="banner_con company_rating"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <img src="assets/image/banner-icon1.png" alt="" />
                      <Counter maxCount={50} interval={20} />
                      <p>Years of Trust</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div
                      class="banner_con company_rating"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <img src="assets/image/banner-icon1.png" alt="" />
                      <Counter maxCount={20} interval={20} />
                      <p>Countries Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
