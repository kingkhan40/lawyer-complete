import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Testemonial from "../testmonial/Testemonial";
import Footer2 from "../Footer/Footer2";

const Blog = () => {
  return (
    <>
      <section className="blogs-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="single-card-blog"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <Link to="/" className="d-flex align-items-center gap-15">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go Back To Home
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="./img/carousel-3.jpg"
                  className="img-fluid"
                  alt="blog"
                />
                <p className="text" data-aos="fade-up" data-aos-delay="500">
                  Experienced in legislative drafting i.e. vetting and drafting
                  of Bills / Ordinances / Statutes including sub-ordinate
                  legislation i.e. Rules, Regulations, By-Laws, Notifications,
                  Statutory Instruments, International Treaties, Conventions,
                  Agreements, MOUs, Contracts and Sovereign Guaranties, He / She
                  should be seasoned expert in research of legal matters. We
                  usually receive National & International Government Contract
                  for drafting of an exhaustive legislation and require the
                  services of various lawyers capable to vet and draft the
                  relevant Statutes and its Rules. We’ll be obliged if you
                  please send us your passport sized coloured photograph,
                  mentioning your name on its back, through courier, to
                  facilitate us to add your name in the list of people engaged
                  in the legal profession for the required purpose, along with
                  We want to place some of the important names in our web-site
                  under the caption “Legal Experts for Outsourcing”. The
                  particulars placed here-in may enable our domestic,
                  international clients or any other Organization / Agency,
                  desiring to avail your services, to contact you through us.
                  For this purpose we’d like to have your concise profile,
                  giving essential particulars regarding your educational
                  qualifications and experience, preferably shortened into 1
                  paragraph along-with your passport sized photograph. In case
                  you’ll accept the offer from them, you can join the said
                  organization. This facility is given to you without any cost
                  except that we want to have your continued professional
                  relationship with our law firm, in future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="blogs-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <Testemonial />
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default Blog;
