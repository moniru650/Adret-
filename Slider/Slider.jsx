import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/css/slidercss.css";



const Slider = () => {

  return (
    <>
      <section className="testimonials_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div
                className="heading"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h2>Testimonials From Clients </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <OwlCarousel items={1} loop margin={10} nav className="owl-carousel owl-theme review_slider">

                <div className="item">
                  <div
                    className="testimonials_content"
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                  >
                    <div className="contented">
                      <div className="top_content">
                        <div className="coma_sty">
                          <img
                            src="../../../public/assets/image/home-new-quotetion.svg"
                            alt=""
                          />
                        </div>
                        <div className="content_profile">
                          <img
                            src="../../../public/assets/image/home-new-testi-img.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p>
                        About adret I have bunch of things to share. But in a
                        nutshell..... Awesome experience. Adret always work with
                        a clear vision to client satisfaction as well as
                        employee satisfaction. Being a part of Adret Software. I
                        can say best company to work.
                      </p>
                      <h4>- Yashwant Singh</h4>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div
                    className="testimonials_content"
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                  >
                    <div className="contented">
                      <div className="top_content">
                        <div className="coma_sty">
                          <img
                            src="../../../public/assets/image/home-new-quotetion.svg"
                            alt=""
                          />
                        </div>
                        <div className="content_profile">
                          <img
                            src="../../../public/assets/image/home-new-testi-img.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p>
                      These guys introduced me to SEO, their skilled professionals boosted my website's visibility and ensured quality ranking through user-friendly optimization. Thrilled to have found them, they significantly increased brand awareness and product promotion.
                      </p>
                      <h4>- Johathan Stracke</h4>
                    </div>
                  </div>
                </div> 
                <div className="item">
                  <div
                    className="testimonials_content"
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                  >
                    <div className="contented">
                      <div className="top_content">
                        <div className="coma_sty">
                          <img
                            src="../../../public/assets/image/home-new-quotetion.svg"
                            alt=""
                          />
                        </div>
                        <div className="content_profile">
                          <img
                            src="../../../public/assets/image/home-new-testi-img.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p>
                      Our collaboration with Adret Software has been extremely gratifying. In a matter of days, our Google business visibility skyrocketed and the responses to our Facebook and Instagram posts have begun their steady rise. Looking to continuing to grow our business with them.
                      </p>
                      <h4>- Debalina Majumder</h4>
                    </div>
                  </div>
                </div>

                {/* <div className="item">
                  <div
                    className="testimonials_content"
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                  >
                    <div className="contented">
                      <div className="top_content">
                        <div className="coma_sty">
                          <img
                            src="../../../public/assets/image/home-new-quotetion.svg"
                            alt=""
                          />
                        </div>
                        <div className="content_profile">
                          <img
                            src="../../../public/assets/image/home-new-testi-img.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p>
                      My company's website (sen photography) was designed by Adret , Their work is very nice and professional. They delivered my website on time, now I'm marketing my website with the same company as well. I appreciate their work. thank you.
                      </p>
                      <h4>- Sen Photography Project</h4>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div
                    className="testimonials_content"
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                  >
                    <div className="contented">
                      <div className="top_content">
                        <div className="coma_sty">
                          <img
                            src="../../../public/assets/image/home-new-quotetion.svg"
                            alt=""
                          />
                        </div>
                        <div className="content_profile">
                          <img
                            src="../../../public/assets/image/home-new-testi-img.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p>
                      Thank you Adret software Services pvt ltd for making it possible to  achieve online revenue . It takes time , patience and consistency . well done guys . this is the best digital marketing company i have availed so far .
                      </p>
                      <h4>- Priti makeup artist</h4>
                    </div>
                  </div>
                </div> */}
                
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
