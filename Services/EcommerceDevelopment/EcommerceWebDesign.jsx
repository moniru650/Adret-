import React from "react";
import Slider from "../../Slider/Slider";
import Faq from "../../Faq/Faq";

const data = {
  faqHeader:
    "Frequently Asked Questions - E-commerce Website Development Services",
  caption:
    "Explore the details of our e-commerce website development services. If you have additional questions, feel free to reach out to our knowledgeable team.",
  faqContent: [
    {
      ques: "What Elements Constitute an Effective E-commerce Website?",
      ans: "An effective e-commerce website incorporates user-friendly navigation, a secure and seamless checkout process, visually appealing product displays, responsive design, and robust e-commerce functionalities. It aims to provide a positive shopping experience for customers and facilitate easy transactions.",
    },
    {
      ques: "Why is E-commerce Website Development Important for Online Business?",
      ans: "E-commerce website development is crucial for online businesses as it provides a platform to showcase and sell products or services to a global audience. A well-developed e-commerce website enhances the user experience, builds trust, and streamlines the buying process, contributing to increased sales and customer satisfaction.",
    },
    {
      ques: "Do You Provide Custom E-commerce Website Development Solutions?",
      ans: "Absolutely! Our e-commerce website development services are tailored to meet your unique business requirements. We collaborate with you to understand your products, target audience, and business goals, creating custom e-commerce solutions that align with your brand and drive online success.",
    },
    {
      ques: "How Can E-commerce Website Development Enhance Brand Visibility?",
      ans: "E-commerce website development enhances brand visibility by providing a professional and accessible platform for your products or services. A well-developed e-commerce site not only attracts potential customers but also creates a positive brand image. It allows for easy integration with marketing strategies and contributes to the overall growth and visibility of your online business.",
    },
  ],
};

const EcommerceWebDesign = () => {
  return (
    <div>
      <div
        class="inner-page"
        id="website-design-bg"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div
                class="inner_content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h1>e-commerce Website Development</h1>
                <div aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="ri-home-4-line"></i>Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      e-commerce Website Development
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="website-banner section"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="section-title py-3">
                eCommerce Website Development Company
              </h3>
              <p>
                An experienced team of eCommerce developers to deliver your
                dream online store. The core objective of eCommerce website
                development is to provide the users with a store-like shopping
                experience and provide the administrator with easy management
                facilities. At Adret, an ISO 9001:2015 certified eCommerce
                website development company in India, we take care of both
                requirements by following all industry benchmarks.
              </p>
              <button className="btn btn-primary px-5 py-3 my-3">
                Quick Enquiry
              </button>
              <button className="btn btn-outline-primary px-5 py-3 my-3">
                Website Design Portfolio
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.webguru-india.com/assets/images/ecommerce-website-design-services-layout-design.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section bg_color_secondary"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <h2 className="section-title">
            Platforms Used by Our eCommerce Website Developers
          </h2>
        </div>
        <div className="details-website">
          <div className="container py-5">
            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="py-5">
                  <div className="d-flex align-items-center">
                    <i className="ri-pages-line icon-color" />
                    <p className="subtitle">Magento Development</p>
                  </div>
                  <p>
                    Magento is widely used by eCommerce development companies
                    for handling large product inventories and heavy traffic. It
                    is also the top choice among eCommerce developers for
                    multivendor marketplace development. Due to its modular
                    structure, it allows deep customization of both the
                    front-end and back-end. Magento offers useful analytics and
                    reporting tools, such as Abandoned Cart Report, Low Stock
                    Report, Coupon Usage Report, and many more.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="py-5">
                  <div className="d-flex align-items-center">
                    <i className="ri-line-chart-line icon-color" />
                    <p className="subtitle">OpenCart Development</p>
                  </div>
                  <p>
                    One of the main perks of OpenCart is easy customization.
                    Thanks to the use of AJAX, websites developed using OpenCart
                    are extremely lightweight. It supports over 14000 extensions
                    that can be plugged-in effectively to enhance
                    functionalities of the online store. As a reputable
                    eCommerce development company in India, we can help you
                    create a beautiful online store at a reasonable cost.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="py-5">
                  <div className="d-flex align-items-center">
                    <i className="ri-shopping-cart-line icon-color" />
                    <p className="subtitle"> PrestaShop Development</p>
                  </div>
                  <p>
                    When using PrestaShop, you do not have to deal with a lot of
                    technical aspects or complex coding. It is free, lightweight
                    and easy to use. Besides, it offers multilingual support
                    which allows you to sell your products or services in a
                    global market. Our professional eCommerce website developers
                    are well acquainted with this platform and can build unique
                    eCommerce websites for your business.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="py-5">
                  <div className="d-flex align-items-center">
                    <i className="ri-pencil-ruler-fill icon-color" />
                    <p className="subtitle">WordPress Development</p>
                  </div>
                  <p>
                    WordPress websites are lightweight, faster to build and
                    extremely easy to manage. We use WooCommerce which is the
                    most popular eCommerce plugin for WordPress with 30% of the
                    market share. Built with REST API, WooCommerce is highly
                    scalable and offers secure online payment, configurable
                    shipping options and many other features required for a
                    fully functional eCommerce website.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn3">What's Your Project</button>
            <button className="btn3">Our Creation</button>
          </div>
        </div>
      </section>

      <section
        className="our_clientele_sec"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div
                className="heading row_gap"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <h2>Our Clients</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-6 g-2 row-cols-md-5 row-cols-sm-4 row-cols-3 justify-content-center align-items-center ">
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-1.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-2.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-3.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-4.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-5.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-6.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-7.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-8.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-9.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-10.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-11.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/client-12.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider />
      <section
        className="our_clientele_sec pt-0"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div
                className="heading row_gap"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <h2>Tools &amp; Technologies </h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-6 g-2 row-cols-md-5 row-cols-sm-4 row-cols-3 justify-content-center align-items-center ">
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-5.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-6.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-7.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-8.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-9.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-10.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-11.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg">
              <div
                className="client_box"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <img
                  src="assets/image/tools-12.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq starts */}
      <Faq data={data} />
      {/* faq ends */}
    </div>
  );
};

export default EcommerceWebDesign;
