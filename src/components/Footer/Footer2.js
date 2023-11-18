import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer2 = () => {
  return (
    <>
      <section className="foter" >
        <footer data-aos="fade-down" data-aos-delay="500">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-5 footer-top-data d-flex gap-30 align-items-center">
                <img src='./img/newsletter.png' alt="newsletter" />
                <h4 className="mb-0 text-white">Sign Up For Table</h4>
              </div>
              <div className="col-7">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-1"
                    placeholder="Your Email Adress"
                    aria-label="Your Email Adress"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-btn p-2" id="basic-addon2">
                    Enter
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-6 col-lg-4">
                <div class="footer-about gap-10">
                  <h4>About Us</h4>
                  <p className="text">
                    we have been at the forefront of managing dispensation of
                    quality legal services on a global basis for more than three
                    decades now. Our team of expert attorneys, solicitors and
                    professional consultants very well understand what it takes
                    to meet client expectations for excellent work and
                    responsive services across different countries and.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-8">
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <div class="footer-link">
                      <h4>Services Areas</h4>
                      <Link to="/" className="text-white py-2 mb-1">
                        Civil Law
                      </Link>
                      <Link to="/about" className="text-white py-2 mb-1">
                        Family Law
                      </Link>
                      <Link to="/blog" className="text-white py-2 mb-1">
                        Business Law
                      </Link>

                      <Link to="/team" className="text-white py-2 mb-1">
                        Education Law
                      </Link>
                      <Link to="/contact" className="text-white py-2 mb-1">
                        Immigration Law
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <div class="footer-link">
                      <h4>Useful Pages</h4>
                      <Link to="/" className="text-white py-2 mb-1">
                        Home
                      </Link>
                      <Link to="/about" className="text-white py-2 mb-1">
                        About
                      </Link>
                      <Link to="/blog" className="text-white py-2 mb-1">
                        Blogs
                      </Link>

                      <Link to="/team" className="text-white py-2 mb-1">
                        Team
                      </Link>
                      <Link to="/contact" className="text-white py-2 mb-1">
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <div class="footer-contact">
                      <h4>Get In Touch</h4>
                      <p>
                        <i class="fa fa-map-marker-alt"></i>Your Location, City,
                        Country
                      </p>
                      <p>
                        <i class="fa fa-phone-alt"></i>+012 345 67890
                      </p>
                      <p>
                        <i class="fa fa-envelope"></i>info@example.com
                      </p>
                      <div class="footer-social">
                        <div className="social-icons d-flex gap-30 align-items-center mt-4">
                          <a className="text-white" href="">
                            <BsLinkedin className="fs-4" />
                          </a>
                          <a className="text-white" href="">
                            <BsInstagram className="fs-4" />
                          </a>
                          <a className="text-white" href="">
                            <BsGithub className="fs-4" />
                          </a>
                          <a className="text-white" href="">
                            <BsYoutube className="fs-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer2;

