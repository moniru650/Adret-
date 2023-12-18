import React from "react";

const clients = [];

for (let i = 1; i <= 40; i++) {
  clients.push({
    id: i,
    src: `assets/image/clientsLogo/client-${i}.png`,
  });
}

const Clients = () => {
  return (
    <div>
      <>
        <div className="inner-page" id="clients-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div
                  className="inner_content"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  <h1>Our Clients</h1>
                  <div aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="ri-home-4-line" /> Home
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Our Clients
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="client_sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 text-center">
                <div className="heading">
                  <h2 data-aos="fade-down" data-aos-duration={2000}>
                    Our Clients
                  </h2>
                  <p data-aos="fade-down" data-aos-duration={2500}>
                    We are a renowned web solutions provider offering a range of
                    services to a global clientele, spanning across India,
                    Australia, USA, UK, Canada, Saudi Arabia and many more
                    countries.
                  </p>
                  <div
                    className="btn_sec"
                    data-aos="fade-down"
                    data-aos-duration={2800}
                  >
                    <a href="" className="btn1 btn_gap">
                      Our Clients Testimonials
                    </a>
                    <a href="" className="btn3 ">
                      Get A Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client_happy_sec bg_color">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center row_gaping">
                <div
                  className="heading"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  <h2>Great Reviews by Our Happy Clients</h2>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div
                  className="hppy_clien"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="top_img_logo">
                    <img
                      src="assets/image/google-review1.png"
                      className=""
                      alt=""
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <div className="rating">
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                      </div>
                    </li>
                    <li>
                      <span>4.5</span>
                    </li>
                    <li>225+ Reviews</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="hppy_clien"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="top_img_logo">
                    <img
                      src="assets/image/google-review1.png"
                      className=""
                      alt=""
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <div className="rating">
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                      </div>
                    </li>
                    <li>
                      <span>4.5</span>
                    </li>
                    <li>225+ Reviews</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="hppy_clien"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="top_img_logo">
                    <img
                      src="assets/image/google-review1.png"
                      className=""
                      alt=""
                    />
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <div className="rating">
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                        <i className="text-primary fa fa-star" />
                      </div>
                    </li>
                    <li>
                      <span>4.5</span>
                    </li>
                    <li>225+ Reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our_clientele_sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div
                  className="heading row_gap aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  <h2>Our Clients</h2>
                </div>
              </div>
            </div>
            <div className="row row-cols-lg-6 g-2 row-cols-md-5 row-cols-sm-4 row-cols-3 justify-content-center align-items-center ">
              {clients.map((e) => {
                return (
                  <div className="col-lg">
                    <div
                      className="client_box aos-init "
                      data-aos="zoom-in"
                      data-aos-duration={2000}
                    >
                      <img
                        src={e.src}
                        className="img-fluid client-image-fit"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Clients;