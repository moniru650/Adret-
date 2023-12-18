import React from "react";
import Slider from "../../Slider/Slider";
import Faq from "../../Faq/Faq";

const data = {
  faqHeader: "Frequently Asked Questions - WordPress Development Services",
  caption:
    "Explore the details of our WordPress development services. If you have additional questions, feel free to reach out to our knowledgeable team.",
  faqContent: [
    {
      ques: "What is WordPress and Why Choose It for Website Development?",
      ans: "WordPress is a widely-used open-source content management system (CMS) known for its ease of use and versatility. It's an excellent choice for website development, ranging from blogs and small business websites to large-scale enterprise solutions. Businesses choose WordPress for its extensive plugin ecosystem, customizable themes, and user-friendly interface.",
    },
    {
      ques: "How Can WordPress Development Benefit My Business?",
      ans: "WordPress development can benefit your business by providing a flexible and scalable platform for website creation. Whether you need a simple blog, an e-commerce site, or a complex enterprise website, WordPress offers a range of themes and plugins to meet your requirements. It also allows for easy content management, making it accessible for users with varying technical expertise.",
    },
    {
      ques: "Do You Provide Custom WordPress Development Solutions?",
      ans: "Absolutely! Our WordPress development services are tailored to meet the unique requirements of your business. Whether you need a custom WordPress theme, plugin development, or overall website customization, we collaborate closely with you to deliver solutions aligned with your branding, functionality, and business goals.",
    },
    {
      ques: "How Does WordPress Ensure Security in Website Development?",
      ans: "WordPress prioritizes security through regular updates, a robust user authentication system, and an active developer community. Additionally, there are security plugins and best practices that enhance website protection. By staying informed about potential vulnerabilities and adhering to security measures, WordPress ensures a secure environment for your website.",
    },
  ],
};

const WordpressDev = () => {
  return (
    <>
      <div
        class="inner-page"
        id="nodejs-design-bg"
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
                <h1>WordPress Development</h1>
                <div aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="ri-home-4-line"></i>Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      WordPress Development
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
                  Top WordPress Developers in India
                </h2>
                <p className="">
                  Our experienced WordPress website developers use latest themes
                  and plugins to craft spectacular business websites. We also
                  build custom themes and plugins to develop advanced web
                  applications. You will be in full control of your website and
                  can easily manage its content and features – be it in the form
                  of text, images, multimedia, or other types of data. As a
                  leading WordPress development agency in India, we have
                  delivered hundreds of custom WordPress websites for various
                  business across the globe. Checkout our extensive WordPress
                  Portfolio to understand the quality of our work. Talk to us
                  about your requirement or hire our experienced WordPress
                  developers to fast forward your project.
                </p>
                <h6>
                  Salient Features of our Magento eCommerce Development
                  Services:
                </h6>
                <a href="contact.html" className="btn1 mt-lg-0 mt-2">
                  Request a quote
                </a>
                <button className="btn1">Case Study</button>
              </div>
              <div className="col-md-5">
                <img
                  src="https://www.webguru-india.com/ecommerce-mobile-app/images/bnrimg.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose us starts*/}
      <section className="section " data-aos="fade-up" data-aos-duration={1500}>
        <div
          className="container pt-5"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <h2 className="section-title text-start py-3">
            Our Range of WordPress Services
          </h2>
          <p className="">
            Our web applications possess sophisticated features and can cater to
            complex business requirements for diverse industry verticals. Our
            range of Magento development services includes the following:
          </p>
        </div>
        <div className="details-website">
          <div className="container pb-5">
            <div className="row align-items-center">
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex">
                    <i className="ri-code-s-slash-line h1 icon-color mr-3" />
                    <p className="details-heading">Custom Web Development</p>
                  </div>
                  <p>
                    Depending on your business requirements, we can help you
                    develop WordPress websites that seamlessly work on cross
                    devices and browsers. Interactive UI/UX to robust
                    functionalities - we take care of it all.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
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
                      WordPress Theme Development
                    </p>
                  </div>
                  <p>
                    Our developers are highly experienced in creating custom
                    WordPress theme from scratch. The themes are customized for
                    your business, retina-friendly &amp; SEO optimized. We are
                    also adept at WordPress theme customization.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-cogs icon-color mr-3" />
                    <p className="details-heading">Plugin Development</p>
                  </div>
                  <p>
                    Equipped with the latest trends, we are adept at creating
                    and integrating custom WordPress plugins into your website
                    and extend its functionalities. Our plugins are bug-free and
                    seamlessly perform on diverse devices.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
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
                    <p className="details-heading">Ecommerce Solution</p>
                  </div>
                  <p>
                    We can integrate WooCommerce on your website to craft an
                    online store for your business. We will also include
                    relevant features and plugins to develop a robust and
                    user-friendly eCommerce site.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="ri-line-chart-fill h1 icon-color mr-3" />
                    <p className="details-heading">Feature Enhancement</p>
                  </div>
                  <p>
                    We will extend the features and functionality of your
                    website by integrating third-party APIs for social media,
                    map, payment, video call, SMS &amp; email marketing,
                    analytics, etc.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="ri-settings-5-line icon-color mr-3" />
                    <p className="details-heading">Support and Maintenance</p>
                  </div>
                  <p>
                    Count on our experts for regular website maintenance, bug
                    fixing, version updates, and uninterrupted support tailored
                    to your business requirements. We will keep your site trendy
                    and user-friendly at all times.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="ri-check-double-line icon-color mr-3" />
                    <p className="details-heading">Multisite Development</p>
                  </div>
                  <p>
                    We create websites with multiple subdomains, a common set of
                    plugins, internal networks and distinct content tables.
                    Reach us for an admin-friendly multisite development.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="ri-shuffle-line icon-color mr-3" />
                    <p className="details-heading">Migration to WordPress</p>
                  </div>
                  <p>
                    We can help in migrating an existing website from any other
                    CMS to WordPress. We adopt adequate measures to prevent
                    issues like loss of useful features and data during
                    migration.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={500}
              >
                <div className="py-lg-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="ri-timer-flash-line icon-color mr-3" />
                    <p className="details-heading">Speed Optimization</p>
                  </div>
                  <p>
                    Our WordPress Speed Optimization services include removing
                    unnecessary scripts, efficient cache policies, image
                    optimization, and avoiding excessive DOM sizes. We ensure
                    your website delivers great user experience and enhanced
                    SERP ranks.
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
            Partner with Magento Development Company in India
          </h2>
          <p className="section-subtitle">
            As a leading Magento development company in India, Adret Software Services guarantees you of the following:
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
                    freelancers. Our experienced team responsibly handle the
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
            <button className="btn2">What's Your Project</button>
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
                  The Best Chatbot Plugins for WordPress in 2023
                </h4>
                <p>
                  Chatbots have become increasingly popular in recent years as a
                  way for businesses to interact with customers and automate
                  certain tasks. WordPress is one of the most widely used
                  content management systems among website design companies and
                  there are a variety of chatbot plugins that can be easily
                  integrated into WordPress websites.
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
                  src="https://www.webguru-india.com/assets/images/wordpress-development-services-blog.jpg"
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

export default WordpressDev;
