import React from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <>
      <section className="top-post-area pt-10">
        <div className="container no-padding">
          <div className="row small-gutters">
            <div className="col-lg-8 top-post-left relative">
              <div className="feature-image-thumb relative">
                <div className="overlay overlay-bg" />
                <img
                  className="img-fluid"
                  src="assets/image/service-img1.jpg" /* Replace with your image URL */
                  alt=""
                />
              </div>
              <div className="top-post-details">
                <ul className="tags">
                  <li>
                    <a href="#">Web Technologies</a>
                  </li>
                </ul>
                <a href="#">
                  <h4>The Future of Web Development: Trends and Innovations</h4>
                </a>
                <ul className="meta">
                  <li>
                    <a href="#">
                      <span className="lnr lnr-user" />
                      John Doe
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="lnr lnr-calendar-full" />
                      15 November, 2023
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="lnr lnr-bubble" />
                      12 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 top-post-right">
              <div className="single-top-post">
                <div className="feature-image-thumb relative">
                  <div className="overlay overlay-bg" />
                  <img
                    className="img-fluid"
                    src="assets/image/service-img1.jpg" /* Replace with your image URL */
                    alt=""
                  />
                </div>
                <div className="top-post-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                  </ul>
                  <a href="#">
                    <h4>Mastering Responsive Design for Web Applications</h4>
                  </a>
                  <ul className="meta">
                    <li>
                      <a href="#">
                        <span className="lnr lnr-user" />
                        Jane Smith
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="lnr lnr-calendar-full" />
                        18 November, 2023
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="lnr lnr-bubble" />8 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-top-post mt-2">
                <div className="feature-image-thumb relative">
                  <div className="overlay overlay-bg" />
                  <img
                    className="img-fluid"
                    src="assets/image/service-img1.jpg" /* Replace with your image URL */
                    alt=""
                  />
                </div>
                <div className="top-post-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Programming</a>
                    </li>
                  </ul>
                  <a href="#">
                    <h4>
                      The Power of JavaScript: Enhancing Web Interactivity
                    </h4>
                  </a>
                  <ul className="meta">
                    <li>
                      <a href="#">
                        <span className="lnr lnr-user" />
                        Alex Johnson
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="lnr lnr-calendar-full" />
                        21 November, 2023
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="lnr lnr-bubble" />
                        10 Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="news-tracker-wrap">
                <h6>
                  <span>Breaking News:</span>{" "}
                  <a href="#">New Framework Revolutionizing Web Development</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-post-area pb-120 pt-0 mt-0">
        <div className="container no-padding">
          <div className="row">
            <div className="col-lg-8 post-list">
              <div className="latest-post-wrap">
                <h4 className="cat-title">Latest Web Technologies</h4>

                <div className="single-latest-post row align-items-center">
                  <div className="col-lg-5 post-left">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img
                          className="img-fluid"
                          src="assets/image/service-img1.jpg"
                          alt=""
                        />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Web Development</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-7 post-right">
                    <a href="#">
                      <h4>The Future of Progressive Web Apps (PWAs)</h4>
                    </a>
                    <ul className="meta">
                      <li>
                        <a href="#">
                          <span className="lnr lnr-user" />
                          Sarah Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="lnr lnr-calendar-full" />
                          15 September, 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="lnr lnr-bubble" />
                          12 Comments
                        </a>
                      </li>
                    </ul>
                    <p className="excert">
                      Explore the latest trends and advancements in Progressive
                      Web App development for a seamless user experience.
                    </p>
                  </div>
                </div>

                <div className="single-latest-post row align-items-center">
                  <div className="col-lg-5 post-left">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img
                          className="img-fluid"
                          src="assets/image/service-img1.jpg"
                          alt=""
                        />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-7 post-right">
                    <a href="#">
                      <h4>The Power of Modern JavaScript Frameworks</h4>
                    </a>
                    <ul className="meta">
                      <li>
                        <a href="#">
                          <span className="lnr lnr-user" />
                          Alex Coder
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="lnr lnr-calendar-full" />
                          21 October, 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="lnr lnr-bubble" />8 Comments
                        </a>
                      </li>
                    </ul>
                    <p className="excert">
                      Dive into the capabilities and benefits of using modern
                      JavaScript frameworks for web development projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* add goes here */}
              <div className="popular-post-wrap">
                <h4 className="title">Popular Posts</h4>

                <div className="feature-post relative">
                  <div className="feature-img relative">
                    <div className="overlay overlay-bg" />
                    <img
                      className="img-fluid"
                      src="assets/image/service-img1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <ul className="tags">
                      <li>
                        <a href="#">Tech News</a>
                      </li>
                    </ul>
                    <a href="#">
                      <h3>
                        The Rise of Artificial Intelligence in Modern Society
                      </h3>
                    </a>
                    <ul className="meta">
                      <li>
                        <a href="#">
                          <span className="lnr lnr-user" />
                          Lisa Techlover
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="lnr lnr-calendar-full" />
                          20 November, 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="lnr lnr-bubble" />
                          15 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row mt-20 medium-gutters">
                  <div className="col-lg-6 single-popular-post">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img
                          src="assets/image/service-img1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="details">
                      <a href="#">
                        <h4>
                          The Art of Crafting User-Friendly Website Designs
                        </h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            Jessica Designer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="lnr lnr-calendar-full" />
                            12 November, 2023
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="lnr lnr-bubble" />8 Comments
                          </a>
                        </li>
                      </ul>
                      <p className="excert">
                        Learn the essential elements for creating visually
                        appealing and user-friendly website designs.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 single-popular-post">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img
                          src="assets/image/service-img1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Coding</a>
                        </li>
                      </ul>
                    </div>
                    <div className="details">
                      <a href="#">
                        <h4>
                          The Evolution of Programming Languages: Past, Present,
                          Future
                        </h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            Alex Programmer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="lnr lnr-calendar-full" />
                            08 November, 2023
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="lnr lnr-bubble" />
                            10 Comments
                          </a>
                        </li>
                      </ul>
                      <p className="excert">
                        Explore the journey of programming languages from their
                        inception to the current technological landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relavent-story-post-wrap mt-30">
                <h4 className="title">Relevant Stories</h4>
                <div className="relavent-story-list-wrap">
                  {/* Story 1 */}
                  <div className="single-relavent-post row align-items-center">
                    <div className="col-lg-5 post-left">
                      <div className="feature-img-wrap relative">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg" />
                          <img
                            className="img-fluid"
                            src="assets/image/service-img1.jpg"
                            alt=""
                          />
                        </div>
                        <ul className="tags">
                          <li>
                            <a href="#">Technology</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 post-right">
                      <a href="#">
                        <h4>
                          The Impact of Artificial Intelligence on Future
                          Technologies
                        </h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            Sarah TechEnthusiast
                          </a>
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          10 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />8 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        Explore the significant impact of artificial
                        intelligence on the future of technology.
                      </p>
                    </div>
                  </div>

                  {/* Story 2 */}
                  <div className="single-relavent-post row align-items-center">
                    <div className="col-lg-5 post-left">
                      <div className="feature-img-wrap relative">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg" />
                          <img
                            className="img-fluid"
                            src="assets/image/service-img1.jpg"
                            alt=""
                          />
                        </div>
                        <ul className="tags">
                          <li>
                            <a href="#">Innovation</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 post-right">
                      <a href="#">
                        <h4>The Latest Trends in Tech Innovation</h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            Alex Innovator
                          </a>
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          15 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />
                          10 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        Stay updated on the cutting-edge trends and innovations
                        in the tech industry.
                      </p>
                    </div>
                  </div>

                  {/* Story 3 */}
                  <div className="single-relavent-post row align-items-center">
                    <div className="col-lg-5 post-left">
                      <div className="feature-img-wrap relative">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg" />
                          <img
                            className="img-fluid"
                            src="assets/image/service-img1.jpg"
                            alt=""
                          />
                        </div>
                        <ul className="tags">
                          <li>
                            <a href="#">Cybersecurity</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 post-right">
                      <a href="#">
                        <h4>
                          The Importance of Cybersecurity in a Digital World
                        </h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            Emily CyberSecExpert
                          </a>
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          20 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />
                          12 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        Learn about the crucial role of cybersecurity in
                        safeguarding digital assets and privacy.
                      </p>
                    </div>
                  </div>

                  {/* Story 4 */}
                  <div className="single-relavent-post row align-items-center">
                    <div className="col-lg-5 post-left">
                      <div className="feature-img-wrap relative">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg" />
                          <img
                            className="img-fluid"
                            src="assets/image/service-img1.jpg"
                            alt=""
                          />
                        </div>
                        <ul className="tags">
                          <li>
                            <a href="#">Data Science</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 post-right">
                      <a href="#">
                        <h4>
                          Unlocking Insights with Advanced Data Science
                          Techniques
                        </h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            David DataScientist
                          </a>
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          25 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />
                          15 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        Dive into the world of data science and discover
                        powerful techniques for extracting valuable insights.
                      </p>
                    </div>
                  </div>

                  {/* Add more stories as needed */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebars-area">
                <div className="single-sidebar-widget editors-pick-widget">
                  <h6 className="title">Editor’s Pick</h6>
                  <div className="editors-pick-post">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg" />
                        <img
                          className="img-fluid"
                          src="assets/image/service-img1.jpg"
                          alt=""
                        />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Technology</a>
                        </li>
                      </ul>
                    </div>
                    <div className="details">
                      <a href="#">
                        <h4 className="mt-20">
                          Exploring the Future of Augmented Reality Technology.
                        </h4>
                      </a>
                      <ul className="meta">
                        <li>
                          <a href="#">
                            <span className="lnr lnr-user" />
                            Sarah TechEnthusiast
                          </a>
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          15 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />
                          12 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        Dive into the fascinating world of augmented reality and
                        its potential impact on various industries.
                      </p>
                      <div className="post-lists">
                        <div className="single-post d-flex flex-row">
                          <div className="thumb">
                            <img
                              src="assets/image/service-img1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="detail">
                            <a href="#">
                              <h6>
                                The Rise of Quantum Computing and Its
                                Applications
                              </h6>
                            </a>
                            <ul className="meta">
                              <li>
                                <span className="lnr lnr-calendar-full" />
                                20 November, 2023
                              </li>
                              <li>
                                <span className="lnr lnr-bubble" />8
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="single-post d-flex flex-row">
                          <div className="thumb">
                            <img
                              src="assets/image/service-img1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="detail">
                            <a href="#">
                              <h6>
                                The Evolution of Artificial Intelligence in
                                Healthcare
                              </h6>
                            </a>
                            <ul className="meta">
                              <li>
                                <span className="lnr lnr-calendar-full" />
                                25 November, 2023
                              </li>
                              <li>
                                <span className="lnr lnr-bubble" />
                                10
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-sidebar-widget ads-widget">
                  <img
                    src="assets/image/tech-ad-img.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="single-sidebar-widget newsletter-widget">
                  <h6 className="title">Newsletter</h6>
                  <p>
                    Stay updated with the latest tech news and trends by
                    subscribing to our newsletter.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="col-autos">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Email Address"
                          onFocus={() => (this.placeholder = "")}
                          onBlur={() => (this.placeholder = "Email Address")}
                          type="text"
                        />
                      </div>
                    </div>
                    <a href="#" className="bbtns">
                      Subscribe
                    </a>
                  </div>
                  <p>You can unsubscribe anytime.</p>
                </div>

                <div className="single-sidebar-widget most-popular-widget">
                  <h6 className="title">Most Popular</h6>
                  <div className="single-list flex-row d-flex">
                    <div className="thumb">
                      <img
                        src="assets/image/service-img1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <a href="#">
                        <h6>
                          The Impact of 5G on the Internet of Things (IoT)
                        </h6>
                      </a>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          10 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />
                          15
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-list flex-row d-flex">
                    <div className="thumb">
                      <img
                        src="assets/image/service-img1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <a href="#">
                        <h6>
                          The Future of Electric Vehicles: Innovations and
                          Challenges
                        </h6>
                      </a>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          12 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />
                          12
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-list flex-row d-flex">
                    <div className="thumb">
                      <img
                        src="assets/image/service-img1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <a href="#">
                        <h6>The Role of Blockchain in Securing IoT Devices</h6>
                      </a>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-calendar-full" />
                          18 November, 2023
                        </li>
                        <li>
                          <span className="lnr lnr-bubble" />8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-sidebar-widget social-network-widget">
                  <h6 className="title">Social Networks</h6>
                  <ul className="social-list">
                    <li className="d-flex justify-content-between align-items-center fb">
                      <div className="icons d-flex flex-row align-items-center">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        <p>1200 Likes</p>
                      </div>
                      <a href="#">Like our page</a>
                    </li>
                    <li className="d-flex justify-content-between align-items-center tw">
                      <div className="icons d-flex flex-row align-items-center">
                        <i className="fa fa-twitter" aria-hidden="true" />
                        <p>1500 Followers</p>
                      </div>
                      <a href="#">Follow Us</a>
                    </li>
                    <li className="d-flex justify-content-between align-items-center yt">
                      <div className="icons d-flex flex-row align-items-center">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                        <p>900 Subscribers</p>
                      </div>
                      <a href="#">Subscribe</a>
                    </li>
                    <li className="d-flex justify-content-between align-items-center rs">
                      <div className="icons d-flex flex-row align-items-center">
                        <i className="fa fa-rss" aria-hidden="true" />
                        <p>800 Subscribers</p>
                      </div>
                      <a href="#">Subscribe</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
