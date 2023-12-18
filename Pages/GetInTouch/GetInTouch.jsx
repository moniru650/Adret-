import React, { useState } from "react";
import { AddContact } from "../../apis/ApiIntegrate";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { notificationConfig } from "../../Component/Notification/config";

export default function GetInTouch() {
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
  return (
    <>
      <section class="home_contact p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0593614841478!2d88.43153237443353!3d22.576883032814976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a58a5077e3%3A0xaca97a520d2c7f31!2sMerlin%20Matrix!5e0!3m2!1sen!2sin!4v1699356987622!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen=""
          class="d-none d-md-block"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="containe">
          <div class="row">
            <div class="col-lg-5 ml-auto">
              <div
                class="contact-form"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <form >
                  <h4>GET IN TOUCH</h4>
                  <div class="row g-3">
                    <div class="col-md-12 portfolio-contact">
                    <input
                        type="text"
                        name="name"
                        id=""
                        value={data.name}
                        placeholder="Enter your Name"
                        onChange={(e) => handleChange(e)}
                        className="mb-1"
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.name && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.name}
                      </span>
                    </div>
                    <div class="col-md-12 portfolio-contact">
                    <input
                        type="email"
                        name="email"
                        id=""
                        value={data.email}
                        placeholder="Enter your E-mail id"
                        onChange={(e) => handleChange(e)}
                        className="mb-1"
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.email && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.email}
                      </span>
                    </div>
                    <div class="col-md-12 col-sm-12 portfolio-contact">
                    <input
                        type="text"
                        name="mobile"
                        id=""
                        value={data.mobile}
                        placeholder="Enter your Phone Number"
                        onChange={(e) => handleChange(e)}
                        className="mb-1"
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.mobile && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.mobile}
                      </span>
                    </div>
                    <div class="col-md-12 col-sm-12 portfolio-contact">
                      <select
                        className="form-select mb-1"
                        aria-label="Default select example"
                        name="category"
                        onChange={(e) => handleChange(e)}
                        value={data.category}
                      >
                        <option>SOFTWARES</option>
                        <option>WEBSITE DESIGN</option>
                        <option>WEBSITE DEVELOPMENT</option>
                        <option>GRAPHIC DESIGN</option>
                        <option>UI/UX DESIGNING</option>
                        <option>ECOMMERCE DEVELOPMENT</option>
                        <option>MOBILE APP DEVELOPMENT</option>
                        <option>GAME DEVELOPMENT</option>
                        <option>DIGITAL MARKETING</option>
                      </select>
                      <span className="portfolio-contact-error">
                        {validationErrors.category && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.category}
                      </span>
                    </div>
                    <div class="col-12 portfolio-contact">
                      {/* <textarea
                        name=""
                        id=""
                        cols="30"
                        placeholder="Message"
                        rows="4"
                      ></textarea> */}
                      <input
                        name="message"
                        id="message"
                        value={data.message}
                        placeholder="Message"
                        className="message-input mb-1"
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="portfolio-contact-error">
                        {validationErrors.message && (
                          <i class="fa-solid fa-triangle-exclamation"></i>
                        )}{" "}
                        {validationErrors.message}
                      </span>
                    </div>
                    <div class="col-12">
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
      <ToastContainer />
    </>
  );
}
