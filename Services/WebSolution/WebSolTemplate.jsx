import React, { useState } from "react";
import OurClient from "../../OurClient/OurClient";
import ToolsTechnology from "../../ToolsTechnology/ToolsTechnology";

export default function WebSolTemplate({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <div
        class="inner-page"
        id="website-design-bg"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="inner_content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h1>{data.breadcumb.name}</h1>
                <div aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="ri-home-4-line"></i>Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {data.breadcumb.name}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        class="website-banner section"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-md-6">
              <div class="heading">
                <h3>{data.breadcumb.name}</h3>
                <p>{data.aboutUpper.content}</p>
                <div class="btn_sec">
                  <a href="" class="btn1 btn_gap">
                    Quick Enquiry
                  </a>
                  <a href="" class="btn3">
                    Website Design Portfolio
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <img
                src="https://www.webguru-india.com/assets/images/website-design-services-design-plate.webp"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section
        class="section bg_color1"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="container">
          <h2 class="section-title">{data.aboutLower.heading}</h2>
          <p class="section-subtitle">{data.aboutLower.subheading}</p>

          <p>{data.aboutLower.content}</p>
        </div>

        <div class="details-website">
          <div class="container py-5">
            <div class="row">
              {data.cat_section.map(({ icon, name, content }) => (
                <div
                  class="col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div class="py-5">
                    <div class="d-flex align-items-center">
                      <i class={icon}></i>
                      <p class="subtitle">{name}</p>
                    </div>
                    <p>{content}</p>
                  </div>
                </div>
              ))}
            </div>
            <p class="py-3">{data.cat_section_lwer.content}</p>
            <div class="btn_sec">
              <a href="" class="btn1 btn_gap">
                What's Your Project
              </a>
              <a href="" class="btn3">
                Our Creation
              </a>
            </div>
          </div>
        </div>
      </section>
      <OurClient />
      <ToolsTechnology />

      <section class="wes d-lg-block d-none bg_color">
        <div class="container">
          <h2 class="section-title-2 text-center">
            Our Full-Stack Web Development Services
          </h2>
          <p class="section-subtitle text-center">
            With a strategic approach and creative mind, our full-stack website
            developers can craft industry-standard web applications that help in
            unleashing the full potential of your business. Engage our
            full-stack web development services to get future-ready web apps.
          </p>
          <ul class="nav nav-tabs nav-justified mb-3 " id="ex1" role="tablist">
            <li class="nav-item mr-5" role="presentation">
              <a
                class="nav-link active"
                id="ex3-tab-1"
                data-bs-toggle="tab"
                href="#ex3-tabs-1"
                role="tab"
                aria-controls="ex3-tabs-1"
                aria-selected="true"
              >
                Frontend Development
              </a>
            </li>
            <li class="nav-item mr-5" role="presentation">
              <a
                class="nav-link"
                id="ex3-tab-2"
                data-bs-toggle="tab"
                href="#ex3-tabs-2"
                role="tab"
                aria-controls="ex3-tabs-2"
                aria-selected="false"
              >
                {" "}
                Backend Development
              </a>
            </li>
            <li class="nav-item mr-5" role="presentation">
              <a
                class="nav-link"
                id="ex3-tab-3"
                data-bs-toggle="tab"
                href="#ex3-tabs-3"
                role="tab"
                aria-controls="ex3-tabs-3"
                aria-selected="false"
              >
                API & Integration
              </a>
            </li>
            <li class="nav-item mr-5" role="presentation">
              <a
                class="nav-link"
                id="ex3-tab-4"
                data-bs-toggle="tab"
                href="#ex3-tabs-4"
                role="tab"
                aria-controls="ex3-tabs-4"
                aria-selected="false"
              >
                Database
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="ex3-tab-5"
                data-bs-toggle="tab"
                href="#ex3-tabs-5"
                role="tab"
                aria-controls="ex3-tabs-5"
                aria-selected="false"
              >
                Version Control
              </a>
            </li>
          </ul>

          <div class="tab-content" id="ex2-content">
            <div
              class="tab-pane fade show active"
              id="ex3-tabs-1"
              role="tabpanel"
              aria-labelledby="ex3-tab-1"
            >
              <div class="d-flex align-items-center">
                <i class="ri-pencil-ruler-2-line icon-color icon-style"></i>
                <h4 class="mb-0 ml-2">Frontend Development</h4>
              </div>
              <p>
                At Adret, we take pride in having a team of skilled engineers.
                Our developers are proficient in the latest frontend
                technologies such as Angular, Vue, React, Materialize, and SCSS.
                Our high-end web architecture development, UI enhancement and
                performance tuning are appreciated by a global clientele across
                business verticals. Get your work done with us.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="ex3-tabs-2"
              role="tabpanel"
              aria-labelledby="ex3-tab-2"
            >
              <div class="d-flex align-items-center">
                <i class="ri-terminal-window-line icon-color icon-style"></i>
                <h4 class="mb-0 ml-2">Backend Development</h4>
              </div>
              <p>
                Our backend developers possess years of experience to support
                your business growth with a robust and scalable web solution. We
                are up-to-date with the industry trends and top-notch
                technologies like Node.js, Symfony, Laravel, CakePHP,
                CodeIgniter etc. We work with dexterity and ensure to generate
                an end result that is built to perfection.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="ex3-tabs-3"
              role="tabpanel"
              aria-labelledby="ex3-tab-3"
            >
              <div class="d-flex align-items-center">
                <img
                  src="assets/image/api.png"
                  class="icon-color icon-style p-2"
                  alt=""
                />
                <h4 class="mb-0 ml-2">API Development & Integration</h4>
              </div>
              <p>
                An API is a computing interface that underlines the interactions
                between multiple software intermediaries. RESTful API
                development is a core focus at Adret Software Services. We craft
                secure custom REST framework as a robust and flexible toolkit
                for creating custom web APIs. We maintain a three-level protocol
                to ensure REST API security - authentication / tokenization,
                encryption and origin validation.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="ex3-tabs-4"
              role="tabpanel"
              aria-labelledby="ex3-tab-4"
            >
              <div class="d-flex align-items-center">
                <img
                  src="assets/image/db.png"
                  class="icon-color icon-style p-3"
                  alt=""
                />
                <h4 class="mb-0 ml-2">Database</h4>
              </div>
              <p>
                Our programmers are efficient in working with a variety of
                database to ensure that your application’s data is completely
                secure and easily accessible whenever needed. Our expertise
                extends to various relational and non-relational database
                management systems including PostgreSQL, MySQL, and NoSQL
                database (MongoDB, Apache Cassandra). We specialize on using
                Database Middleware that supports interoperability between
                various software components, facilitates distributed transaction
                execution, helps to improve database services like fault
                tolerance and performance scaling, and also adapts to workloads
                by using adaptive queuing middleware.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="ex3-tabs-5"
              role="tabpanel"
              aria-labelledby="ex3-tab-5"
            >
              <div class="d-flex align-items-center">
                <img
                  src="assets/image/version-control.png"
                  class="icon-color icon-style img-fluid p-3"
                  alt=""
                />
                <h4 class="mb-0 ml-2">Version Control</h4>
              </div>
              <p>
                Version control system helps the development team to manage any
                change to the source code over time. It keeps track of all the
                modifications done to a code in a specific database. In case of
                any unintended error, the developers can turn to the previous
                version and fix the issues. Since an entire development team
                works on a project, it’s better to organize the codes for the
                apps in the file tree and keep a track of the changes. This
                accelerates the process of a glitch-free app development. We
                prefer Bitbucket and GitHub to support our source control needs
                and maintain a smooth workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faq starts */}
      <section class="careers_sec1" id="faq_sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading ">
                <h2>Web Development in India: Frequently Asked Questions</h2>

                <div class="col-md-12 row-below">
                  <div className="accordion">
                    {data.faqSection.map((item, index) => (
                      <div
                        key={index}
                        className={`accordion__item ${
                          activeIndex === index ? "active" : ""
                        }`}
                      >
                        <h2
                          className="accordion__title"
                          onClick={() => handleAccordionClick(index)}
                        >
                          {item.title}
                        </h2>
                        <div
                          
                          className="accordion__body "
                          style={{
                            display: activeIndex === index ? "block" : "none",
                          }}
                        >
                          <p>{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
