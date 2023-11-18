import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Footer2 from "../Footer/Footer2";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12" data-aos="fade-down" data-aos-delay="500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.9905225284!2d72.75644141401347!3d33.61625093916508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1686023433854!5m2!1sen!2s"
                width="1300"
                height="450"
                title="#"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-3" data-aos="fade-up" data-aos-delay="500">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Enter Coments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In To Touch With</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineHome className="fs-4" />
                        <address className="gray">
                          Hno: Near Village RawalPindi, Islamabad
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                        <BiPhoneCall className="fs-4" />
                        <a className="gray">
                          +9234567890
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineMail className="fs-4" />
                        <a className="gray" href="mail: @gmail.com">
                          Userinfo@gmail.com
                        </a>
                      </li>

                      <li className="mb-3 d-flex gap-15">
                        <BiInfoCircle className="fs-4" />
                        <p className="mb-0 gray">
                          Monday To Friday 10AM To 6PM
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2/>
    </>
  );
};

export default Contact;
