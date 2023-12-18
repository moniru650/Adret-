import React, { useState } from "react";
import { AddContact } from "../../apis/ApiIntegrate";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { notificationConfig } from "../Notification/config";


const filterButtons = [
  { id: 1, title: "Website" },
  { id: 2, title: "Mobile Apps" },
  { id: 3, title: "Logo" },
  { id: 4, title: "Corporate Identity" },
  { id: 5, title: "Brochure" },
  { id: 6, title: "Explainer Videos" },
];

const filterImages = [
  {
    id: 1,
    src: "assets/image/portfolio/portfolio-1.webp",
    content: [
      {
        idx: 1,
        header: "Shree Balaji Textiles",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 2,
    src: "assets/image/portfolio/portfolio-2.webp",
    content: [
      {
        idx: 1,
        header: "Sher-e-Bengal",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 3,
    src: "assets/image/portfolio/portfolio-3.webp",
    content: [
      {
        idx: 1,
        header: "Salem's",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 4,
    src: "assets/image/portfolio/portfolio-4.webp",
    content: [
      {
        idx: 1,
        header: "KeraDermClinic",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 5,
    src: "assets/image/portfolio/portfolio-5.webp",
    content: [
      {
        idx: 1,
        header: "Holiday Resort",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 6,
    src: "assets/image/portfolio/portfolio-6.webp",
    content: [
      {
        idx: 1,
        header: "Welcome to Gang-Dua",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 7,
    src: "assets/image/portfolio/portfolio-7.webp",
    content: [
      {
        idx: 1,
        header: "Conscious Academy",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 8,
    src: "assets/image/portfolio/portfolio-8.webp",
    content: [
      {
        idx: 1,
        header: "The Website for a Website Name",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 9,
    src: "assets/image/portfolio/portfolio-9.webp",
    content: [
      {
        idx: 1,
        header: "Glacier's Exports",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 10,
    src: "assets/image/portfolio/portfolio-10.webp",
    content: [
      {
        idx: 1,
        header: "Safety Air Cushions  ",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 11,
    src: "assets/image/portfolio/portfolio-11.webp",
    content: [
      {
        idx: 1,
        header: "Window King",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 12,
    src: "assets/image/portfolio/portfolio-12.webp",
    content: [
      {
        idx: 1,
        header: "Paver Sealing Pros",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 13,
    src: "assets/image/portfolio/portfolio-13.webp",
    content: [
      {
        idx: 1,
        header: "Manjushree",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 14,
    src: "assets/image/portfolio/portfolio-14.webp",
    content: [
      {
        idx: 1,
        header: "Allister Biotech",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 15,
    src: "assets/image/portfolio/portfolio-15.webp",
    content: [
      {
        idx: 1,
        header: "The Website for a Website Name",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 16,
    src: "assets/image/portfolio/portfolio-16.webp",
    content: [
      {
        idx: 1,
        header: "Ayojon Caterers",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 17,
    src: "assets/image/portfolio/portfolio-17.webp",
    content: [
      {
        idx: 1,
        header: "AsiaTripHolidays",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 18,
    src: "assets/image/portfolio/portfolio-18.webp",
    content: [
      {
        idx: 1,
        header: "ChildiT",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 19,
    src: "assets/image/portfolio/portfolio-19.webp",
    content: [
      {
        idx: 1,
        header: "DIIHM Kolkata",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 20,
    src: "assets/image/portfolio/portfolio-20.webp",
    content: [
      {
        idx: 1,
        header: "Reid Security Solutions",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 21,
    src: "assets/image/portfolio/portfolio-21.webp",
    content: [
      {
        idx: 1,
        header: "Safai Mates",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 22,
    src: "assets/image/portfolio/portfolio-22.webp",
    content: [
      {
        idx: 1,
        header: "Satyam Marbles",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 23,
    src: "assets/image/portfolio/portfolio-23.webp",
    content: [
      {
        idx: 1,
        header: "Secure Life Healthcare",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
  {
    id: 24,
    src: "assets/image/portfolio/portfolio-24.webp",
    content: [
      {
        idx: 1,
        header: "S.I.E.T",
        desc1: "Banner slider, Image gallery, Services listing, Career form,",
        desc2: "WordPress",
      },
    ],
    filterData: "Website",
  },
];

const Portfolio = () => {
// Submit Contact Form Start
const [isLoading, setIsLoading] = useState(false);
  
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateField = () => {
    const errors = {};
    if (!data.name) {
      errors.name = "Please Enter Your Name";
    }else if (!data.email) {
      errors.email = "Please Enter Your Email Id";
    }else if (!data.mobile) {
      errors.mobile = "Please Enter Your Mobile no.";
    } else if (data.mobile.length !== 10) {
      errors.mobile = "Please Enter Valid Mobile No.";
    }else if (!data.category) {
      errors.category = "Please Select a Category";
    }else if (!data.message) {
      errors.message = "Please Enter Your Query";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const isValid = validateField();
    if (isValid) {
      try {
        const resp = await AddContact(data);
        setData({name:"",email:"",mobile:"",category:"",message:""});
        toast(resp.msg, notificationConfig.success);        
      } catch (error) {
        console.error("Error adding contact:", error);
      }
    }
    setIsLoading(false);
  };

  // Submit Contact Form End

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
  };

  const filteredImages = selectedFilter
    ? filterImages.filter(
        (image) =>
          image.filterData ===
          filterButtons.find((button) => button.id === selectedFilter).title
      )
    : filterImages;

  return (
    <div>
      <>
        <section className="portfolio_sec">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7">
                <div
                  className="protfolio_img"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <img
                    src="assets/image/portfolio-img.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="contact-form"
                  data-aos="fade-left"
                  data-aos-duration={2000}
                >
                  <form>
                    <h4>Quick A Quote</h4>
                    <div className="row g-3">
                      <div className="col-md-12 portfolio-contact">
                      <input
                        type="text"
                        name="name"
                        id=""
                        value={data.name}
                        placeholder="Enter your Name"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.name && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.name}
                      </span>
                      </div>
                      <div className="col-md-12 portfolio-contact">
                      <input
                        type="email"
                        name="email"
                        id=""
                        value={data.email}
                        placeholder="Enter your E-mail id"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.email && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.email}
                      </span>
                      </div>
                      <div className="col-md-12 col-sm-12 portfolio-contact">
                      <input
                        type="text"
                        name="mobile"
                        id=""
                        value={data.mobile}
                        placeholder="Enter your Phone Number"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.mobile && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.mobile}
                      </span>
                      </div>
                      <div className="col-md-12 col-sm-12 portfolio-contact">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="category"
                          onChange={(e) => handleChange(e)}
                          value={data.category}
                        >
                          <option>Softwares</option>
                          <option>Website Design</option>
                          <option>Website Development</option>
                          <option>Graphic Design</option>
                          <option>UI/UX Designing</option>
                          <option>Ecommerce Development</option>
                          <option>Mobile App Development</option>
                          <option>Game Development</option>
                          <option>Digital Marketing</option>
                        </select>
                        <span className="portfolio-contact-error">
                        {validationErrors.category && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.category}
                      </span>
                      </div>
                      <div className="col-12 portfolio-contact">
                      <textarea
                        name="message"
                        id=""
                        cols={30}
                        placeholder="Message"
                        value={data.message}
                        rows={5}
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.message && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.message}
                      </span>
                      </div>
                      <div className="col-12">
                      <button onClick={handleSubmit}>
                        {" "}
                        {isLoading && (
                          <span
                            className="spinner-grow spinner-grow-sm me-1"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}{" "}
                        Submit now
                      </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio_sec1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  {filterButtons.map((elem) => {
                    const { id, title } = elem;
                    return (
                      <li className="nav-item" role="presentation" key={id}>
                        <button
                          className={`nav-link ${
                            selectedFilter === id ? "active" : ""
                          }`}
                          type="button"
                          role="tab"
                          aria-controls={`pills-${title}`}
                          onClick={() => handleFilterClick(id)}
                        >
                          {title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div
                  className="heading"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  <h4 className="section-title-2 py-5">
                    Robust, functional &amp; cost-effective website design
                    services for your business
                  </h4>
                </div>
              </div>

              <div>
                <div className="row g-4">
                  {filteredImages.map((data) => {
                    const { id, src, content } = data;
                    const { idx, header, desc1, desc2 } = content[0];

                    return (
                      <div className={`col-lg-4 col-md-4 col-sm-6`} key={id}>
                        <div
                          className="content_portfolio"
                          data-aos="zoom-in"
                          data-aos-duration={2000}
                        >
                          <div className="portfolio_img">
                            <img src={src} className="img-fluid" alt="" />
                          </div>
                          <div className="overlay_dec" key={idx}>
                            <h5>{header}</h5>
                            <ul className="list-unstyled">
                              <li>
                                <i className="ri-arrow-right-double-fill" />{" "}
                                {desc1}
                              </li>
                              <li>
                                <i className="ri-arrow-right-double-fill" />{" "}
                                {desc2}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </>
    </div>
  );
};

export default Portfolio;
