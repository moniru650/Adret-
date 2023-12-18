import React from "react";
import Slider from "../../Slider/Slider";
import Faq from "../../Faq/Faq";

const data = {
  faqHeader: "Frequently Asked Questions - BigCommerce Development Services",
  caption:
    "Explore our BigCommerce development services with answers to common questions. For more information, feel free to contact our experienced team.",
  faqContent: [
    {
      ques: "How Does BigCommerce Support Cross-Channel Selling?",
      ans: "BigCommerce supports cross-channel selling by integrating with popular online marketplaces like Amazon and eBay. This allows businesses to expand their reach and manage products, inventory, and orders seamlessly across multiple sales channels. With BigCommerce, you can maintain a centralized view of your operations and enhance your presence in various online marketplaces.",
    },
    {
      ques: "What Advanced Analytics and Reporting Features Does BigCommerce Offer?",
      ans: "BigCommerce provides advanced analytics and reporting features to help businesses make informed decisions. With built-in analytics tools, you can track key performance indicators, monitor sales trends, and gain insights into customer behavior. BigCommerce also integrates with external analytics platforms, giving you the flexibility to use your preferred analytics tools for in-depth analysis.",
    },
    {
      ques: "Can BigCommerce Accommodate High-Traffic E-commerce Websites?",
      ans: "Absolutely! BigCommerce is designed to accommodate high-traffic e-commerce websites. Its cloud-based infrastructure ensures reliable performance and scalability, allowing your online store to handle increased traffic without compromising on speed and user experience. This makes BigCommerce suitable for businesses with growing online operations.",
    },
    {
      ques: "How Does BigCommerce Facilitate Mobile Commerce (M-commerce)?",
      ans: "BigCommerce facilitates M-commerce by offering responsive and mobile-friendly storefronts. The platform ensures that your online store provides a seamless and engaging shopping experience across various devices, including smartphones and tablets. With features like mobile-optimized checkout, businesses can tap into the growing trend of mobile shopping.",
    },
  ],
};

const BigCommerceDev = () => {
  return (
    <>
      <div
        className="inner-page"
        id="nodejs-design-bg"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="inner_content"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <h1>BigCommerce Development</h1>
                <div aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="ri-home-4-line" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      BigCommerce Development
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="bg-body-tertiary">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h2 className="section-title">
                  Why Bigcommerce For eCommerce Solution
                </h2>
                <p className="">
                  BigCommerce is an easy-to-manage eCommerce platform that does
                  not need much technical input once the site is developed and
                  made live. With effortless administration and a clear
                  user-interface, this platform is a favorite of many business
                  owners who are starting afresh. User-friendly functions like
                  complete inventory viewing, automated returns, multiple
                  payment gateway integrations, and more, make it a chosen
                  eCommerce platform for large companies as well. BigCommerce
                  offers a plenty of in-built plugins to customize the store as
                  per your business requirements.
                </p>
                <a href="contact.html" className="btn1 mt-lg-0 mt-2">
                  Request a quote
                </a>
                <button className="btn1">Case Study</button>
              </div>
              <div className="col-md-5">
                <img
                  src="https://www.webguru-india.com/assets/images/bigcommerce-development-website.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us starts*/}
      <section className="section" data-aos="fade-up" data-aos-duration={1500}>
        <div
          className="container pt-5"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <h2 className="section-title text-start py-3">
            Our BigCommerce Development &amp; Maintenance Services
          </h2>
          <p className="">
            Our web applications possess sophisticated features and can cater to
            complex business requirements for diverse industry verticals. Our
            range of BigCommerce development services includes the following:
          </p>
        </div>
        <div className="details-website">
          <div className="container pb-5">
            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex">
                    <i className="ri-code-s-slash-line h1 icon-color mr-3" />
                    <p className="details-heading">
                      BigCommerce Website Development
                    </p>
                  </div>
                  <p>
                    Our qualified developers can create enterprise-scale
                    websites with SEO friendly features, streamlined product
                    catalogues, order management systems, third-party plugins,
                    and multi-store management tools.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <img
                      width={50}
                      height={50}
                      className="mr-3"
                      src="https://img.icons8.com/ios-glyphs/50/0d6efd/stationery.png"
                      alt="stationery"
                    />
                    <p className="details-heading">
                      Custom E-Commerce Solutions
                    </p>
                  </div>
                  <p>
                    Our experts embrace cutting-edge tools and techniques to
                    craft an optimized and customized online store to address
                    your specific business requirements. Our eCommerce solutions
                    are developed using market-best practices so you can rest
                    assured of higher user engagement and enhanced conversion
                    rates.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-cogs icon-color mr-3" />
                    <p className="details-heading">BigCommerce Extensions</p>
                  </div>
                  <p>
                    BigCommerce extensions are equipped with flexible modules
                    and plugins. We can extend the functionalities of your
                    e-store with robust BigCommerce extensions. We ensure to
                    streamline your sale conversions with our advanced solution.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <img
                      width={50}
                      height={50}
                      className="mr-3"
                      src="https://img.icons8.com/ios/50/0d6efd/cyber-security.png"
                      alt="cyber-security"
                    />
                    <p className="details-heading">
                      Theme Development &amp; API Integration
                    </p>
                  </div>
                  <p>
                    We can create and customize BigCommerce themes to transform
                    your vision into reality. Our effective, flexible, and
                    affordable PSD to BigCommerce conversion service is highly
                    appreciated by the global clientele. We also add third-party
                    APIs like payment gateway and other features to enhance the
                    user-friendliness of your online store.
                  </p>
                </div>
              </div>
              {/* Similar blocks for other services */}
            </div>
            <button className="btn3 btn_gap">What's Your Project</button>
            <button className="btn3">Our Creation</button>
          </div>
        </div>
      </section>
      {/* why choose us ends */}

      <section
        className="section bg_color"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <h2 className="section-title">
            Partner with BigCommerce Development Company in India
          </h2>
          <p className="section-subtitle">
            As a leading BigCommerce development company in India, Adret Software Services guarantees you of the following:
          </p>
        </div>
        <div className="details-website">
          <div className="container pb-5">
            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="py-lg-5 py-2">
                  <div>
                    <i className="ri-team-fill icon-style-white img-fluid icon-color-white" />
                    <p className="details-heading">Experienced Team</p>
                  </div>
                  <p>
                    We employ only experienced developers and don’t work with
                    freelancers. Our experienced team responsibly handles the
                    projects and offers a comprehensive solution. From custom
                    web development to third-party plugin integration - we do it
                    all.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                <div className="py-lg-5 py-2">
                  <div>
                    <i className="ri-timer-flash-line icon-style icon-color img-fluid text-white border-white" />
                    <p className="details-heading">Quick Turnaround Time</p>
                  </div>
                  <p>
                    Whether you want to launch an MVP (Minimum Viable Product)
                    or extend the functionalities of your e-store - we can
                    efficiently execute that within a quick turnaround time.
                    This will offer you a competitive edge in the market.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-5 py-2">
                  <div>
                    <i className="ri-check-double-line icon-style icon-color img-fluid text-white border-white" />
                    <p className="details-heading">
                      Industry-Standard Solution
                    </p>
                  </div>
                  <p>
                    Adept with advanced tools and technologies, our experts can
                    craft industry-standard robust solutions. Our online store
                    will enhance your user experience and also help the business
                    owners efficiently manage the admin panel. We ensure a
                    glitch-free service.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="py-lg-5 py-2">
                  <div>
                    <i className="ri-tools-line icon-color icon-style img-fluid text-white border-white" />
                    <p className="details-heading">Competitive Rate</p>
                  </div>
                  <p>
                    The best part of engaging our service is its affordability.
                    We tailor our web solutions as per your requirement so you
                    can pay for just what you want. While hiring us, you can
                    rest assured that no hidden charge will burden you.
                  </p>
                </div>
              </div>
            </div>
            <button className="btn2 btn_gap">What's Your Project</button>
            <button className="btn2">Our Creation</button>
          </div>
        </div>
      </section>

      <section
        className="our_clientele_sec section"
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

      <section className="section" data-aos="fade-up" data-aos-duration={1500}>
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

      <Faq data={data} />

      <section
        className="section bg_color_secondary"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-7 blog-left wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.0s"
            >
              <h2 className="section-title">From Our Blog</h2>
              <div className="blog-inner">
                <h4 className="section-subtitle">
                  Magento 2.4 - Everything You Should Know
                </h4>
                <p>
                  Adobe released Magento 2.4 on 28th July 2020, which came with
                  a long list of new features, security enhancements, and bug
                  fixes. While Magento is a popular eCommerce CMS, thousands of
                  online stores are still on Magento 1. However, with this new
                  update Magento has given store owners every reason to migrate
                  to the newer, better version.
                </p>
                <button className="btn1">Read Blog Post</button>
              </div>
            </div>
            <div
              className="col-md-5 hidden-xs blog-right wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.0s"
            >
              <div className="blog-image-holder">
                <img
                  className="msd-lazyload loaded"
                  src="https://www.webguru-india.com/assets/images/digital-marketing-services-blog.jpg"
                  alt="blog-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BigCommerceDev;
