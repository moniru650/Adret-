import React from "react";
import Slider from "../Slider/Slider";
import Faq from "../Faq/Faq";

const data = {
  faqHeader: "Frequently Asked Questions - jQuery Development Services",
  caption:
    "Explore our jQuery development services with answers to common questions. For more information, feel free to contact our experienced team.",
  faqContent: [
    {
      ques: "What is jQuery and How Does It Enhance Web Development?",
      ans: "jQuery is a fast and lightweight JavaScript library designed to simplify client-side scripting and HTML document traversal. It enhances web development by providing a concise and easy-to-use syntax for tasks such as DOM manipulation, event handling, and AJAX requests. jQuery streamlines the development process, making it more efficient and accessible for developers.",
    },
    {
      ques: "In What Scenarios Should I Consider Using jQuery in Web Projects?",
      ans: "Consider using jQuery in web projects when you need to create interactive and dynamic user interfaces. It's particularly beneficial for projects that involve DOM manipulation, animations, and AJAX functionality. jQuery simplifies cross-browser compatibility and offers a range of plugins, making it a versatile choice for various web development scenarios.",
    },
    {
      ques: "Do You Provide Custom jQuery Development Solutions?",
      ans: "Certainly! Our jQuery development services are tailored to meet the unique requirements of your web projects. Whether you need to enhance the interactivity of your website, integrate jQuery plugins, or troubleshoot existing jQuery code, our experienced team collaborates closely with you to deliver customized solutions aligned with your development goals.",
    },
    {
      ques: "How Does jQuery Contribute to Responsive Web Design?",
      ans: "jQuery contributes to responsive web design by simplifying tasks related to dynamic content and user interactions. With jQuery, developers can create responsive navigation menus, sliders, and other interactive elements that adapt to different screen sizes. Its event handling and animation capabilities play a key role in providing a seamless user experience across devices.",
    },
  ],
};

export default function JqueryMobile() {
  return (
    <>
      <div class="sm_menu"></div>
      <div class="mobile-header-section d-block d-lg-none">
        <div class="mobile-header-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex justify-content-between align-items-center">
                <div class="mobile-header--left">
                  <a href="index.html" class="mobile-logo-link">
                    <img src="assets/image/logo.png" alt="" />
                  </a>
                </div>
                <div class="mobile-header--right">
                  <a
                    href="#mobile-menu-offcanvas"
                    class="mobile-menu offcanvas-toggle"
                  >
                    <span class="mobile-menu-dash"></span>
                    <span class="mobile-menu-dash"></span>
                    <span class="mobile-menu-dash"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu-offcanvas"
        class="offcanvas offcanvas-leftside offcanvas-mobile-menu-section"
      >
        <div class="offcanvas-header text-right">
          <button class="offcanvas-close">
            <i class="fa fa-times"></i>
          </button>
        </div>
        <div class="offcanvas-mobile-menu-wrapper">
          <div class="mobile-menu-top">
            <span>
              <img src="assets/image/logo.png" alt="" />
            </span>
          </div>
          <div class="mobile-menu-center">
            <div class="offcanvas-menu">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="#">
                    <span>Services</span>
                  </a>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">Design & Branding</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="brand-identity-design.html">
                            Brand Identity
                          </a>
                        </li>
                        <li>
                          <a href="logo-design.html">Logo Design</a>
                        </li>
                        <li>
                          <a href="corporate-identity-design.html">
                            Corporate Identity
                          </a>
                        </li>
                        <li>
                          <a href="brochure-design.html">Brochure Design</a>
                        </li>
                        <li>
                          <a href="explainer-video.html">Explainer Video</a>
                        </li>
                        <li>
                          <a href="content-writing.html">Content Writing</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">Web Solutions</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="website-design.html">Website Design</a>
                        </li>
                        <li>
                          <a href="web-application-development.html">
                            Web Application Development
                          </a>
                        </li>
                        <li>
                          <a href="small-business-website.html">
                            Small Business Website
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">Ecommerce Development</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="ecommerce-website-design.html">
                            eCommerce Website Design
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce-app.html">eCommerce App</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">App Development</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="mobile-app-development.html">
                            Mobile App Development
                          </a>
                        </li>
                        <li>
                          <a href="android-app-development.html">
                            Android App Development
                          </a>
                        </li>
                        <li>
                          <a href="ios-app-development.html">
                            iOS App Development
                          </a>
                        </li>
                        <li>
                          <a href="react-native-development.html">
                            React Native Development
                          </a>
                        </li>
                        <li>
                          <a href="hybrid-app-development.html">
                            Hybrid App Development
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">Marketing & Lead Generation</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="digital-marketing.html">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="seo-services.html">SEO Services</a>
                        </li>
                        <li>
                          <a href="social-media-marketing.html">
                            Social Media Marketing
                          </a>
                        </li>
                        <li>
                          <a href="ppc-management.html">PPC Management</a>
                        </li>
                        <li>
                          <a href="local-seo.html">Local SEO</a>
                        </li>
                        <li>
                          <a href="content-marketing-services.html">
                            Content Marketing Services
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">
                    <span>Technology</span>
                  </a>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">Web Technolgies</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="nodejs-development.html">
                            Node JS Development
                          </a>
                        </li>
                        <li>
                          <a href="angularjs-development.html">
                            Angular Development
                          </a>
                        </li>
                        <li>
                          <a href="react-development.html">React Development</a>
                        </li>
                        <li>
                          <a href="php-development.html"> PHP Development</a>
                        </li>
                        <li>
                          <a href="mongodb.html">MongoDB</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">CMS Technologies</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="wordpress-development.html">
                            Wordpress Development
                          </a>
                        </li>
                        <li>
                          <a href="drupal-development.html">
                            Drupal Development
                          </a>
                        </li>
                        <li>
                          <a href="joomla-development.html">
                            Joomla Development
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">eCommerce Technologies</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="magento-development.html">
                            {" "}
                            Magento Development
                          </a>
                        </li>
                        <li>
                          <a href="shopify-development.html">
                            Shopify Development
                          </a>
                        </li>
                        <li>
                          <a href="bigcommerce.html">BigCommerce</a>
                        </li>
                        <li>
                          <a href="woocommerce-development.html">
                            WooCommerce Development
                          </a>
                        </li>
                        <li>
                          <a href="opencart-development.html">
                            OpenCart Development
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="#">Mobile Technologies</a>
                      <ul class="mobile-sub-menu">
                        <li>
                          <a href="android-app-development.html">
                            Andriod Development
                          </a>
                        </li>
                        <li>
                          <a href="ios-app-development.html">iOS Development</a>
                        </li>
                        <li>
                          <a href="react-native-app-development.html">
                            React Native Development
                          </a>
                        </li>
                        <li>
                          <a href="swift-app-development.html">
                            Swift Development
                          </a>
                        </li>
                        <li>
                          <a href="jquery-mobile-app-development.html">
                            jQuery Mobile
                          </a>
                        </li>
                        <li>
                          <a href="ionic-app-development.html">
                            Ionic Development
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="clients.html">Clients</a>
                </li>

                <li>
                  <a href="#">
                    <span>Hire Us</span>
                  </a>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="hire-angular-developer.html">
                        Hire Angular Developer
                      </a>
                    </li>
                    <li>
                      <a href="hire-nodejs-developer.html">
                        Hire Node JS Developer
                      </a>
                    </li>
                    <li>
                      <a href="hire-laravel-developer.html">
                        Hire Laravel Developer
                      </a>
                    </li>
                    <li>
                      <a href="hire-php-developer.html">Hire PHP Developer</a>
                    </li>
                    <li>
                      <a href="hire-wordpress-developer.html">
                        Hire WordPress Developer
                      </a>
                    </li>
                    <li>
                      <a href="hire-android-app-developer.html">
                        Hire Android Developer
                      </a>
                    </li>
                    <li>
                      <a href="hire-ios-developer.html">Hire iOS Developer</a>
                    </li>
                    <li>
                      <a href="hire-react-native-app-developer.html">
                        Hire React Native Developer
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">
                    <span>Solutions</span>
                  </a>
                  <ul class="mobile-sub-menu">
                    <li>
                      <a href="food-delivery-app.html">Food Delivery App</a>
                    </li>
                    <li>
                      <a href="ecommerce-mobile-app.html">
                        eCommerce Mobile App
                      </a>
                    </li>
                    <li>
                      <a href="elearning-solutions.html">eLearning Solutions</a>
                    </li>
                    <li>
                      <a href="property-listing-solutions.html">
                        Property Listing Solutions
                      </a>
                    </li>
                    <li>
                      <a href="shopping-cart-development.html">
                        Shopping Cart Development
                      </a>
                    </li>
                    <li>
                      <a href="dynamic-web-design.html">Dynamic Web Design</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="blogs.html">Blogs</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section class="logo_design_sec1 bg_color1">
        <div class="container">
          <div class="row g-4 align-items-center">
            <div class="col-lg-9 col-sm-9">
              <div
                class="heading"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h1>Jquery Mobile App Development</h1>
                <p>
                  In the ever-evolving landscape of mobile app development,
                  staying at the forefront requires a strategic blend of
                  innovation and technology. Adret Software embraces the power
                  of jQuery, a versatile and efficient JavaScript library, to
                  create dynamic and responsive mobile applications. Let's
                  explore how our jQuery Mobile App Development services can
                  transform your ideas into engaging and feature-rich mobile
                  experiences.
                </p>
                <div class="btn_sec ">
                  <a href="" class="btn1 btn_gap">
                    Quick Enquiry
                  </a>
                  <a href="" class="btn3">
                    Call : +91 9432205976
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-3">
              <img
                src="assets/image/android-app-development-banner-img.png"
                class="img-fluid"
                data-aos="zoom-in"
                data-aos-duration="2000"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="logo_design_sec">
        <div class="container">
          <div
            class="heading aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>Our jQuery Mobile App Development Services</h2>
            <p>
              Unlock the power of cross-platform innovation with our jQuery
              Mobile App Development services. We craft seamless and responsive
              applications, ensuring a consistent user experience across various
              devices. Elevate your mobile presence with Adret Software's
              expertise in jQuery, delivering dynamic and feature-rich apps at
              unparalleled speed.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-11">
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/android-app-development-icon1.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h5>Cross-Platform App Mastery</h5>
                      <p>
                        Expand your reach with our cross-platform app
                        development expertise. We leverage jQuery Mobile to
                        create applications that run flawlessly on iOS, Android,
                        and other major platforms, ensuring a consistent user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/android-app-development-icon7.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h5> Responsive Design Brilliance</h5>
                      <p>
                        User experience is our priority. Utilizing jQuery
                        Mobile's responsive design capabilities, we ensure that
                        your app adapts seamlessly to different screen sizes,
                        providing a visually appealing and user-friendly
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/android-app-development-icon3.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h5>Bespoke jQuery Plugins</h5>
                      <p>
                        Elevate your app's functionality with custom jQuery
                        plugins. Our developers create tailored solutions,
                        incorporating interactive elements, dynamic content
                        loading, and unique features to meet the specific needs
                        of your app.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/android-app-development-icon4.png"
                        alt=""
                        class="img-fluid"
                      />{" "}
                    </div>
                    <div class="content">
                      <h5>Integration with Web Technologies</h5>
                      <p>
                        Seamless connectivity is key. Our jQuery Mobile app
                        development services seamlessly integrate with web
                        technologies, enabling real-time updates, dynamic
                        content, and enhanced user engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="btn_sec aos-init"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <a href="" class="btn1 btn_gap">
                  Meet Our Team
                </a>
                <a href="" class="btn3">
                  Let’s Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="android-app-development-tool py-3 bg_color">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 mx-auto">
              <div class="row row-cols-5 g-2">
                <div class="col-lg">
                  <img
                    src="assets/image/android-app-development-logo.png"
                    class="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
                <div class="col-lg">
                  <img
                    src="assets/image/android-app-development-logo1.jpg"
                    class="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
                <div class="col-lg">
                  <img
                    src="assets/image/android-app-development-logo2.jpg"
                    class="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
                <div class="col-lg">
                  <img
                    src="assets/image/android-app-development-logo3.jpg"
                    class="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
                <div class="col-lg">
                  <img
                    src="assets/image/android-app-development-logo4.jpg"
                    class="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="android_app_prot">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div
                class="heading text-center"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <h2>Our jQuery Mobile App Development Expertise</h2>
              </div>
            </div>
          </div>
          <div
            class="android_app_expertise android_app_bg1 row-below"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div class="row justify-content-between g-4">
              <div class="col-lg-6 order-2 order-md-1">
                <div class="content_img">
                  <img
                    src="assets/image/android-app-img1.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-5 order-1 order-md-2">
                <div class="heading">
                  <h4>Ride Booking App</h4>
                  <p>
                    The app offers a ride booking service. It has several
                    user-friendly features such as driver and vehicle details,
                    in-app route tracker, rating system, an option of calling
                    the driver, etc. Razorpay is integrated here as the payment
                    gateway.
                  </p>
                  <div class="btn_sec">
                    <a href="" class="btn1">
                      View Our Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="android_app_expertise android_app_bg1 row-below"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div class="row justify-content-between g-4">
              <div class="col-lg-5">
                <div class="heading">
                  <h4>Ride Booking App</h4>
                  <p>
                    The app offers a ride booking service. It has several
                    user-friendly features such as driver and vehicle details,
                    in-app route tracker, rating system, an option of calling
                    the driver, etc. Razorpay is integrated here as the payment
                    gateway.
                  </p>
                  <div class="btn_sec">
                    <a href="" class="btn1">
                      View Our Case Study
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content_img">
                  <img
                    src="assets/image/android-app-img1.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              class="col-lg-12 text-center row-below"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div class="btn_sec">
                <a href="" class="btn3">
                  See More Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="success_sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center row_gap">
              <div class="heading" data-aos="fade-up" data-aos-duration="2000">
                <h2>Cherish Our Success!</h2>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-3">
              <div
                class="success_con"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div class="success_img">
                  <img src="assets/image/success-icon-1.png" alt="" />
                </div>
                <div class="content_count">
                  <span>100+</span>
                  <p class="mb-0">Apps Delivered</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="success_con"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div class="success_img">
                  <img src="assets/image/success-icon-2.png" alt="" />
                </div>
                <div class="content_count">
                  <span>25+</span>
                  <p class="mb-0">Countries Served</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="success_con"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div class="success_img">
                  <img src="assets/image/success-icon-3.png" alt="" />
                </div>
                <div class="content_count">
                  <span>100+</span>
                  <p class="mb-0">Team Members</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="success_con"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div class="success_img">
                  <img src="assets/image/success-icon-4.png" alt="" />
                </div>
                <div class="content_count">
                  <span>15+</span>
                  <p class="mb-0">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="logo_design_sec">
        <div class="container">
          <div class="heading" data-aos="fade-down" data-aos-duration="2000">
            <h2>
              Why Choose Adret Software for jQuery <br /> Mobile App
              Development:
            </h2>
            <p>
              Entrust your jQuery Mobile app development needs to our experts.
              We assure you of:
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/logo-design-icon1.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h5>jQuery Mastery at Scale</h5>
                      <p>
                        Our developers are not just proficient; they are masters
                        of jQuery Mobile development. We leverage its
                        capabilities at scale to create mobile applications that
                        stand out in terms of performance and user experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/logo-design-icon2.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h5>Tailored Solutions, Every Time</h5>
                      <p>
                        We understand that each app is unique. Our jQuery Mobile
                        app development services offer tailored solutions,
                        ensuring that every application aligns with the specific
                        goals and identity of our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="content_why aos-init"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div class="left_icon">
                      <img
                        src="assets/image/logo-design-icon3.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h5>Collaborative Development Approach</h5>
                      <p>
                        Collaboration is at the heart of our development
                        process. We keep our clients involved, seek their input,
                        and ensure that the final product seamlessly aligns with
                        their vision and objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="btn_sec aos-init"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <a href="" class="btn1">
                  Partner with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider />

      <section class="process_follow">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div
                class="heading"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <h2>
                  jQuery Mobile App Development <br />
                  The Process We Follow
                </h2>
                <p>
                  As a top-rated jQuery Mobile App Development company, we adopt
                  a proven work approach to ensure the most effective outcome.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div
                class="porcese_ber"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div class="porcess_con">
                  <div class="porcess_icon">
                    <img src="assets/image/process-icon1.png" alt="" />
                  </div>
                  <h5> Requirement Analysis & Ideation</h5>
                </div>
                <div class="porcess_con">
                  <div class="porcess_icon">
                    <img src="assets/image/process-icon2.png" alt="" />
                  </div>
                  <h5> UI/UX Design</h5>
                </div>
                <div class="porcess_con">
                  <div class="porcess_icon">
                    <img src="assets/image/process-icon3.png" alt="" />
                  </div>
                  <h5> Development</h5>
                </div>
                <div class="porcess_con">
                  <div class="porcess_icon">
                    <img src="assets/image/process-icon4.png" alt="" />
                  </div>
                  <h5> Quality Assurance</h5>
                </div>
                <div class="porcess_con">
                  <div class="porcess_icon">
                    <img src="assets/image/process-icon5.png" alt="" />
                  </div>
                  <h5> Deployment</h5>
                </div>
                <div class="porcess_con">
                  <div class="porcess_icon">
                    <img src="assets/image/process-icon6.png" alt="" />
                  </div>
                  <h5> Maintenance</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="logo_design_project p-0" id="android_app">
        <div class="row g-0 ">
          <div class="col-lg-5">
            <div
              class="content_img aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                src="assets/image/call-suprot-img.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-7 text-center">
            <div
              class="heading aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h3> Support For 24/7</h3>
              <p>
                What can we do for you? We would be happy to discuss the project
                with you in person
              </p>
              <div class="btn_sec">
                <a href="" class="btn2">
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq data={data} />
    </>
  );
}
