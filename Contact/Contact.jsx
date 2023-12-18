import React, { useState } from "react";
import { AddContact } from "../../apis/ApiIntegrate";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { notificationConfig } from "../Notification/config";

const Contact = () => {
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

  return (
    <>
      <div className="inner-page" id="contact-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="inner_content"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <h1>Contact Us</h1>
                <div aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="ri-home-4-line" /> Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div
              className="col-12 mb-4 mb-md-0 heading text-center"
              data-aos="fade-down"
              data-aos-duration={2000}
            >
              <h2>Contact Us</h2>
              <p>
                Get in touch with us! Our team is here to assist you. Reach out
                for inquiries, collaborations, or any assistance you need
              </p>
            </div>
          </div>
          <div className="row  g-3">
            <div className="col-md-4">
              <div
                className="contact-top"
                data-aos="fade-up"
                data-aos-duration={2500}
              >
                <div
                  className="contact-icon"
                  data-aos="zoom-in"
                  data-aos-duration={3000}
                >
                  <img src="assets/image/location.gif" alt="" />
                </div>
                <div className="contact-info-top">
                  <h4>Headquarters</h4>
                  <p className="mb-0">
                    Unit 506, Merlin Matrix, DN 10, Sector V, Salt Lake, Kolkata
                    - 700091
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="contact-top"
                data-aos="fade-up"
                data-aos-duration={2500}
              >
                <div
                  className="contact-icon"
                  data-aos="zoom-in"
                  data-aos-duration={3000}
                >
                  <img src="assets/image/message.gif" alt="" />
                </div>
                <div className="contact-info-top">
                  <h4>Email Us</h4>
                  <a href="mailto:info@adretsoftware.com">
                    {" "}
                    info@adretsoftware.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="contact-top"
                data-aos="fade-up"
                data-aos-duration={2500}
              >
                <div
                  className="contact-icon"
                  data-aos="zoom-in"
                  data-aos-duration={3000}
                >
                  <img src="assets/image/phone.gif" alt="" />
                </div>
                <div className="contact-info-top">
                  <h4>Call Us</h4>
                  <p className="mb-0">
                    <a href="tel:+91 9432205976"> +91 9432205976</a>{" "}
                    <span>/</span>
                    <a href="tel:+44 1223968001"> +44 1223968001</a>{" "}
                    <span>/</span>
                    <a href="tel:+1 (315) 715 8485">+1 (315) 715 8485</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-below">
            <div className="col-md-12 mx-auto order-1 order-md-2 mb-4 mb-md-0">
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <form>
                  <h4>GET IN TOUCH</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Enter your Name"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="error">
                        {validationErrors.name && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.name}
                      </span>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Enter your E-mail id"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="error">
                        {validationErrors.email && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.email}
                      </span>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="mobile"
                        id=""
                        placeholder="Enter your Phone Number"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="error">
                        {validationErrors.mobile && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.mobile}
                      </span>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="category"
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="Software">SOFTWARES</option>
                        <option value="Website Design">WEBSITE DESIGN</option>
                        <option value="Website Developement">
                          WEBSITE DEVELOPMENT
                        </option>
                        <option value="Graphic Design">GRAPHIC DESIGN</option>
                        <option value="UI/UX Designing">UI/UX DESIGNING</option>
                        <option value="Ecommerce Developement">
                          ECOMMERCE DEVELOPMENT
                        </option>
                        <option value="MObile App Developement">
                          MOBILE APP DEVELOPMENT
                        </option>
                        <option value="Game Developement">
                          GAME DEVELOPMENT
                        </option>
                        <option value="Digital Marketing">
                          DIGITAL MARKETING
                        </option>
                      </select>
                      <span className="error">
                        {validationErrors.category && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.category}
                      </span>
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id=""
                        cols={30}
                        placeholder="Message"
                        rows={5}
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="error">
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
      <section className="our_clientele_sec bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div
                className="heading row_gap aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
                className="client_box aos-init"
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
      <section className="protfilio_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center row_gaping">
              <div
                className="heading"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h2>Our Professionals Team</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6">
              <div
                className="meet_team_con"
                data-aos="zoom-in"
                data-aos-duration={3000}
              >
                <img
                  src="assets/image/adret-software-service-office.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="meet_team_con"
                data-aos="zoom-in"
                data-aos-duration={3000}
              >
                <img
                  src="assets/image/adret-software-service-office-img1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="meet_team_con"
                data-aos="zoom-in"
                data-aos-duration={3000}
              >
                <img
                  src="assets/image/adret-software-service-office-img.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center row-below">
            <div
              className="btn_sec"
              data-aos="fade-down"
              data-aos-duration={2000}
            >
              <a href="" className="btn1">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
