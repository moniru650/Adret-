import React from "react";
import ToolsTechnology from "../../ToolsTechnology/ToolsTechnology";
import OurClient from "../../OurClient/OurClient";
import Faq from "../../Faq/Faq";

const data = {
  faqHeader: "Frequently Asked Questions - Digital Marketing Services",
  caption:
    "Explore the details of our comprehensive digital marketing services. If you have additional questions, feel free to reach out to our knowledgeable team.",
  faqContent: [
    {
      ques: "How Does SEO Contribute to Digital Marketing Success?",
      ans: "Search Engine Optimization (SEO) is a crucial component of digital marketing. It involves optimizing your website to rank higher in search engine results. By improving visibility, SEO increases organic traffic, builds credibility, and contributes to long-term online success.",
    },
    {
      ques: "What Role Does Social Media Play in Digital Marketing?",
      ans: "Social media is a powerful tool in digital marketing for building brand awareness, engaging with your audience, and driving website traffic. Effective social media strategies can enhance customer relationships, promote content, and create a loyal online community for your brand.",
    },
    {
      ques: "Can Email Marketing Benefit My Business?",
      ans: "Absolutely! Email marketing is a cost-effective way to nurture leads, communicate with your audience, and drive conversions. Well-crafted email campaigns can deliver personalized content, promotions, and valuable information, keeping your brand top-of-mind for your subscribers.",
    },
    {
      ques: "How Do Paid Advertising Campaigns Contribute to Digital Marketing Goals?",
      ans: "Paid advertising, whether through search engines, social media platforms, or display networks, allows for targeted and measurable campaigns. It can quickly increase brand visibility, drive traffic, and generate leads, making it a valuable component of a comprehensive digital marketing strategy.",
    },
  ],
};


export default function DigitalMarketing() {
  return (
    <>
      <div class="inner-page" id="nodejs-design-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div
                class="inner_content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h1>Digital Marketing</h1>
                <div aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="ri-home-4-line"></i>Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Digital Marketing
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="bg-body-tertiary">
          <div class="container py-5">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div
                  class="heading"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h2>
                    Top Digital Marketing Agency in India to Maximize Your ROI
                  </h2>
                  <p class="section-subtitle text-start mt-3">
                    We do it and we do it well - any business and goal!
                  </p>

                  <p>
                    There are now over 5 Billion internet users across the
                    world, accounting for over 63% of the global population. At
                    the same time, the internet is a crowded place with multiple
                    websites fighting for customers’ attention simultaneously.
                    So how can you ensure that your brand stands out and steals
                    the spotlight?
                  </p>

                  <p class="mt-3">
                    This is where we come in. Being an experienced digital
                    marketing agency in India, we take pride in our marketing
                    prowess. Our services come backed with a dynamic approach, a
                    modernized skillset, reasonable pricing, and 18+ years of
                    experience. With services tailor-made for you, we can assure
                    your business an edge over its competition.
                  </p>
                  <div
                    class="btn_sec"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a href="contact.html" class="btn1 btn_gap">
                      Request a quote
                    </a>
                    <a href="" class="btn3">
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <img
                  src="https://www.webguru-india.com/ecommerce-mobile-app/images/bnrimg.png"
                  class="img-fluid"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="section bg_color1"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="container pt-5" data-aos="fade-up" data-aos-duration="1500">
          <h2 class="section-title text-start py-3">
            Our Bespoke Digital Marketing Services
          </h2>

          <p class="">
            Adret has helped hundreds of businesses grow their online customers
            base, and help you too. Our digital marketing experts can craft
            tactical solutions for your brand that are guaranteed to positively
            affect your ROI.
          </p>
        </div>
        <div class="details-website">
          <div class="container pb-5">
            <div class="row align-items-center">
              <div
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <div class="py-lg-3 py-2">
                  <div class="d-flex">
                    <img
                      width="50"
                      height="50"
                      class="mr-3"
                      src="https://img.icons8.com/ios/50/0d6efd/web.png"
                      alt="web"
                    />
                    <h5 class="mb-0">User First Strategy - UI/UX</h5>
                  </div>
                  <p>
                    We consider the needs and preferences of the users while
                    planning an app development strategy. If they find your app
                    easy to operate, its popularity will grow and it’ll cut
                    through the competition.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <div class="py-lg-3 py-2">
                  <div class="d-flex align-items-center">
                    <img
                      width="50"
                      height="50"
                      class="mr-3"
                      src="https://img.icons8.com/ios-filled/50/0d6efd/media-queries.png"
                      alt="media-queries"
                    />
                    <p class="details-heading">
                      Adaptability - Screen Sizes & Devices
                    </p>
                  </div>
                  <p>
                    We build the interface of application adaptable to
                    variations. We make sure that the text is readable and the
                    navigation fits within the screen for a wide range of makes
                    and models.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div class="py-lg-3 py-2">
                  <div class="d-flex align-items-center">
                    <img
                      width="50"
                      height="50"
                      class="mr-3"
                      src="https://img.icons8.com/ios-glyphs/50/0d6efd/stationery.png"
                      alt="stationery"
                    />
                    <p class="details-heading">Minimize Action Sequences</p>
                  </div>
                  <p>
                    Reducing the number of actions in an app effectively helps
                    the users to accomplish a task quickly. Hence, we do the
                    needful to simplify the user journey in the app.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <div class="py-lg-3 py-2">
                  <div class="d-flex align-items-center">
                    <img
                      width="50"
                      height="50"
                      class="mr-3"
                      src="https://img.icons8.com/ios/50/0d6efd/cyber-security.png"
                      alt="cyber-security"
                    />
                    <p class="details-heading">Security</p>
                  </div>
                  <p>
                    Our mobile app makers implement all the safety measures to
                    protect sensitive data shared by the users. Further, we
                    disclose the purpose of collecting every data to make the
                    users feel comfortable using the app.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <div class="py-lg-3 py-2">
                  <div class="d-flex align-items-center">
                    <img
                      src="assets/image/brand-image.png"
                      class="mr-3"
                      alt=""
                    />
                    <p class="details-heading">Brand Focused</p>
                  </div>
                  <p>
                    Top mobile app development services are always tailored as
                    per your requirement. We research your business extensively
                    before starting the development process.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div class="py-lg-3 py-2">
                  <div class="d-flex align-items-center">
                    <img
                      width="50"
                      height="50"
                      class="mr-3"
                      src="https://img.icons8.com/ios-filled/50/0d6efd/commercial.png"
                      alt="commercial"
                    />
                    <p class="details-heading">Marketing & Promotion</p>
                  </div>
                  <p>
                    Our app store optimization services help your application to
                    stand out from the crowd in the app market of the iOS and
                    Android platforms.
                  </p>
                </div>
              </div>
              <p>
                Node JS stands out as a technically advanced application
                development platform for both small and large scale businesses.
                Opt for our Node JS development services for robust and
                fast-operating web and mobile applications.
              </p>
            </div>
            <div class="btn_sec" data-aos="fade-up" data-aos-duration="1500">
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

      <section
        class="section bg_color"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="container">
          <div class="heading">
            <h2>Count On Us When You Hire Mobile App Developers</h2>
            <p class="section-subtitle">
              Are you looking to hire mobile app developers from India at a
              competitive rate? Here are a few of many reasons for picking us as
              your trusted app development company.
            </p>
          </div>
        </div>

        <div class="details-website">
          <div class="container pb-5">
            <div class="row g-4">
              <div
                class="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <div class="moblile_app_con">
                  <div>
                    <i class="ri-javascript-line icon-style icon-color img-fluid text-white border-white"></i>
                    <h4>Push Notifications</h4>
                  </div>
                  <p>
                    Keep your users updated with the latest offers or progress
                    of any service through push notification and drive user
                    engagement.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <div class="moblile_app_con">
                  <div>
                    <i class="ri-timer-flash-line icon-style icon-color img-fluid text-white border-white"></i>
                    <h4>Social Media Integration</h4>
                  </div>
                  <p>
                    Social integration simplifies the process of signup and also
                    allows the users to share your app / service / product on
                    varied channels. This actively encourages brand promotion.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div class="moblile_app_con">
                  <div>
                    <i class="ri-check-double-line icon-style icon-color img-fluid text-white border-white"></i>
                    <h4>Payment Gateway Integration</h4>
                  </div>
                  <p>
                    Integrating a secure payment gateway into the app helps the
                    online shoppers to checkout seamlessly resulting in more
                    conversion for the business.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <div class="moblile_app_con">
                  <div>
                    <i class="ri-tools-line icon-color icon-style img-fluid text-white border-white"></i>
                    <h4>User Feedback</h4>
                  </div>
                  <p>
                    Feedback system integrated into an app helps the users to
                    report bugs, complaints or suggestions. Handling such
                    feedback with care helps to build trust and credibility.
                  </p>
                </div>
              </div>
            </div>

            <div class="btn_sec" data-aos="fade-up" data-aos-duration="1500">
              <a href="" class="btn2 btn_gap">
                What's Your Project
              </a>
              <a href="" class="btn2">
                Our Creation
              </a>
            </div>
          </div>
        </div>
      </section>

      <ToolsTechnology />
      <OurClient />

     <Faq data={data} />

      <section class="section " data-aos="fade-up" data-aos-duration="1500">
        <div class="container">
          <div class="row">
            <div
              class="col-md-7 blog-left wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.0s"
            >
              <h2 class="section-title">From Our Blog</h2>
              <div class="blog-inner">
                <h4 class="section-subtitle">
                  Top Technologies and Trends to Guide Mobile App Development
                </h4>
                <p>
                  Over the past decade or so, there has been a significant
                  growth in the use of mobile devices, especially smartphones.
                  Today, nearly 6.92 billion people worldwide use smartphones.It
                  translates to roughly 85.82 percent of the world’s population
                  (source: Statista).
                </p>
                <button class="btn1">Read Blog Post</button>
              </div>
            </div>
            <div
              class="col-md-5 hidden-xs blog-right wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.0s"
            >
              <div class="blog-image-holder">
                <img
                  class="msd-lazyload loaded"
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
}
