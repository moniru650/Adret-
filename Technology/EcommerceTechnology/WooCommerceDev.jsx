import React from "react";
import Slider from "../../Slider/Slider";
import Faq from "../../Faq/Faq";

const data = {
  faqHeader: "Frequently Asked Questions - WooCommerce Development Services",
  caption:
    "Explore our WooCommerce development services with answers to common questions. For more information, feel free to contact our experienced team.",
  faqContent: [
    {
      ques: "How Does WooCommerce Integrate with WordPress for E-commerce?",
      ans: "WooCommerce seamlessly integrates with WordPress, turning your website into a powerful e-commerce store. It's a WordPress plugin that extends the platform's capabilities, enabling you to sell products, manage inventory, and process payments directly from your WordPress website. This integration provides a user-friendly and familiar environment for both content management and e-commerce operations.",
    },
    {
      ques: "What Customization Options Does WooCommerce Offer for Online Stores?",
      ans: "WooCommerce offers extensive customization options for online stores. From customizing product pages and checkout processes to choosing from a variety of themes and plugins, businesses can tailor their online store to match their brand and unique requirements. WooCommerce's flexibility ensures that your e-commerce site reflects your specific vision and functionality needs.",
    },
    {
      ques: "Can WooCommerce Handle Both Physical and Digital Products?",
      ans: "Absolutely! WooCommerce is designed to handle both physical and digital products. Whether you're selling tangible goods that require shipping or digital products such as e-books, software, or online courses, WooCommerce provides the necessary features for product management, order fulfillment, and secure digital downloads.",
    },
    {
      ques: "How Does WooCommerce Enhance the Marketing and Promotional Capabilities of E-commerce Stores?",
      ans: "WooCommerce enhances marketing and promotional capabilities through features like discount coupons, product bundles, and cross-selling. With built-in SEO tools and integration possibilities with popular marketing tools, businesses can effectively market their products. WooCommerce also supports various payment gateways, providing customers with multiple payment options for a convenient shopping experience.",
    },
  ],
};


const WooCommerceDev = () => {
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
                <h1>WooCommerce Development</h1>
                <div aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="ri-home-4-line" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      WooCommerce Development
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
                  WooCommerce Plugin Development
                </h2>
                <p className="">
                  Built with a REST API, WooCommerce is an open-source eCommerce
                  plugin for WordPress. It is an ideal solution for small to
                  medium online retailers. With an easy set up and a simple yet
                  feature rich interface, the WooCommerce plugin is the world’s
                  most preferred shopping cart platform today. Since 2012, the
                  rate of migration to WooCommerce has grown by 14%. Now, there
                  are around 2 million active online retail stores developed on
                  this platform.
                </p>

                <a href="contact.html" className="btn1 mt-lg-0 mt-2">
                  Request a quote
                </a>
                <button className="btn1">Case Study</button>
              </div>
              <div className="col-md-5">
                <img
                  src="https://www.webguru-india.com/assets/images/woocommerce-development-services-banner-img.png"
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
            Our WooCommerce Development &amp; Maintenance Services
          </h2>
          <p className="">
            Our web applications possess sophisticated features and can cater to
            complex business requirements for diverse industry verticals. Our
            range of WooCommerce development services includes the following:
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
                      WooCommerce Website Development
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
                    are developed using the market-best practices so you can
                    rest assured of higher user engagement and enhanced
                    conversion rates.{" "}
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
                    <p className="details-heading">WooCommerce Extensions</p>
                  </div>
                  <p>
                    WooCommerce extensions are equipped with flexible modules
                    and plugins. We can extend the functionalities of your
                    e-store with robust WooCommerce extensions. We ensure to
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
                    We can create and customize WooCommerce themes to transform
                    your vision into reality. Our effective, flexible, and
                    affordable PSD to WooCommerce conversion service is highly
                    appreciated by the global clientele. We also add third-party
                    APIs like payment gateway and other features to enhance the
                    user-friendliness of your online store.
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
                    <i className="ri-shuffle-line h1 icon-color mr-3" />
                    <p className="details-heading">WooCommerce Migration</p>
                  </div>
                  <p>
                    WooCommerce is an open-source eCommerce plugin for
                    WordPress. It is an ideal solution for small to medium
                    online retailers. With an easy set up and a simple yet
                    feature rich interface, the WooCommerce plugin is the
                    world’s most preferred shopping cart platform today
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
                    <i className="ri-line-chart-fill icon-color mr-3" />
                    <p className="details-heading">Maintenance</p>
                  </div>
                  <p>
                    Developing a WooCommerce-based website sprouts the maximum
                    results when it remains updated with the latest
                    technological trends. As a leading WooCommerce development
                    company, we can keep your e-store updated with the latest
                    industry standards and offer your audience a superb user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <button className="btn3">What's Your Project</button>
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
            Partner with WooCommerce Development Company in India
          </h2>
          <p className="section-subtitle">
            As a leading WooCommerce development company in India, Adret
            guarantees you of the following:
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
                    Adept with the advanced tools and technologies, our experts
                    can craft industry-standard robust solution. Our online
                    store will enhance your user experience and also help the
                    business owners to efficiently manage the admin panel. We
                    ensure a glitch-free service.
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
                  WooCommerce - Everything You Should Know
                </h4>
                <p>
                  WooCommerce is a powerful e-commerce solution for WordPress
                  that allows you to create and manage an online store. Learn
                  about the features, benefits, and how to make the most of
                  WooCommerce for your business. Whether you are a small
                  business or a large enterprise, WooCommerce can be tailored to
                  suit your needs.
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
                  src="https://www.webguru-india.com/assets/images/woocommerce-development-services-blog.jpg"
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

export default WooCommerceDev;
