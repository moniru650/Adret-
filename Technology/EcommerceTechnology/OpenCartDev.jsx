import React from "react";
import Slider from "../../Slider/Slider";
import Faq from "../../Faq/Faq";

const data = {
  faqHeader: "Frequently Asked Questions - OpenCart Development Services",
  caption:
    "Discover the details of our OpenCart development services. If you have additional questions, feel free to reach out to our knowledgeable team.",
  faqContent: [
    {
      ques: "What is OpenCart and Why Choose It for E-commerce Development?",
      ans: "OpenCart is an open-source e-commerce platform known for its user-friendly interface and flexibility. It provides a feature-rich environment for building online stores. Businesses choose OpenCart for e-commerce development when they need a cost-effective solution that is easy to set up and offers extensive customization options.",
    },
    {
      ques: "How Can OpenCart Development Benefit My E-commerce Business?",
      ans: "OpenCart development can benefit your e-commerce business by offering a straightforward and customizable platform. With OpenCart, you can quickly establish an online presence, manage products and categories efficiently, and utilize a variety of extensions for additional functionalities. Its modular architecture allows for easy scalability as your business grows.",
    },
    {
      ques: "Do You Provide Custom OpenCart Development Solutions?",
      ans: "Absolutely! Our OpenCart development services are tailored to meet the unique requirements of your e-commerce business. Whether you need a new OpenCart store, customization of themes and features, or integration with third-party extensions, we collaborate closely with you to deliver customized solutions aligned with your brand and business goals.",
    },
    {
      ques: "How Does OpenCart Ensure Security for E-commerce Transactions and Customer Data?",
      ans: "OpenCart prioritizes security for e-commerce transactions and customer data through encryption, secure coding practices, and regular updates. The platform follows industry standards to protect sensitive information and provides options for secure payment gateways. By staying vigilant about potential security risks, OpenCart helps ensure a secure environment for your online store.",
    },
  ],
};


const OpenCartDev = () => {
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
                <h1>OpenCart Development</h1>
                <div aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="ri-home-4-line" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      OpenCart Development
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
                <h2 className="section-title">OpenCart Plugin Development</h2>
                <p className="">
                  Built with a modular architecture, OpenCart is an open-source
                  eCommerce platform. It is an excellent solution for small to
                  medium-sized online retailers. With its user-friendly
                  interface and extensive features, OpenCart is a popular choice
                  for creating online stores. The OpenCart plugin development
                  ecosystem is rapidly growing, providing flexibility and
                  scalability for your eCommerce needs.
                </p>

                <a href="contact.html" className="btn1 btn_gap">
                  Request a quote
                </a>
                <button className="btn1">Case Study</button>
              </div>
              <div className="col-md-5">
                <img
                  src="https://www.webguru-india.com/assets/images/opencart-development-services-banner-img.png"
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
            Our OpenCart Development &amp; Maintenance Services
          </h2>
          <p className="">
            Our web applications possess sophisticated features and can cater to
            complex business requirements for diverse industry verticals. Our
            range of OpenCart development services includes the following:
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
                      OpenCart Website Development
                    </p>
                  </div>
                  <p>
                    Our qualified developers can create scalable and
                    feature-rich websites using OpenCart. From SEO-friendly
                    product catalogs to order management systems, we provide
                    comprehensive solutions for your eCommerce needs.
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
                    Our experts use cutting-edge tools to craft customized
                    online stores that meet your specific business requirements.
                    Our OpenCart-based eCommerce solutions follow market best
                    practices, ensuring higher user engagement and enhanced
                    conversion rates.
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
                    <p className="details-heading">OpenCart Extensions</p>
                  </div>
                  <p>
                    Our OpenCart extensions are designed to enhance the
                    functionality of your e-store. We can integrate robust
                    extensions to optimize your online store and streamline
                    sales conversions.
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
                    Our team can create and customize OpenCart themes to bring
                    your vision to life. Our PSD to OpenCart conversion service
                    is effective, flexible, and affordable, ensuring a seamless
                    user experience with added features like third-party API
                    integration.
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
                    <p className="details-heading">OpenCart Migration</p>
                  </div>
                  <p>
                    If you are considering migrating to OpenCart, we can help.
                    Our experts can smoothly migrate your online store to
                    OpenCart, ensuring a seamless transition and minimal
                    disruption to your business operations.
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
                    Keeping your OpenCart-based website updated with the latest
                    technological trends is crucial for optimal performance. As
                    a leading OpenCart development company, we offer maintenance
                    services to keep your e-store in top-notch condition.
                  </p>
                </div>
              </div>
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
            Partner with OpenCart Development Company in India
          </h2>
          <p className="section-subtitle">
            As a leading OpenCart development company in India, Adret guarantees
            you of the following:
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
                  OpenCart - Everything You Should Know
                </h4>
                <p>
                  OpenCart is a robust e-commerce solution that provides a
                  platform for creating and managing online stores. Discover the
                  features, advantages, and how to maximize OpenCart for your
                  business. Whether you run a small business or a large
                  enterprise, OpenCart can be customized to meet your specific
                  needs.
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
                  src="https://www.webguru-india.com/assets/images/opencart-development-services-blog.jpg"
                  alt="blog-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default OpenCartDev;
