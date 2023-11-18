import React from "react";
import Data from "../Blogs/BlogApi";
import Testemonial from "../testmonial/Testemonial";
import Footer2 from "../Footer/Footer2";

const Team = () => {
  return (
    <>
      <section className="team-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h2 className="heading">LLP | LAWYERS TEAM - PAKISTAN</h2>
              <p className="text">
                Our lawyers team is highly motivated and dedicated who've a
                compassion for justice and client service and we value rights
                and liberties of our living society. Our team will be
                self-starting, exercising initiative in accomplishing our goals,
                acting on situations and opportunities, rather than be acted
                upon. We build a nurture lasting relationships, both within our
                firm and with our clients and our team is viewed as being
                professional, aggressive, and compassionate in several aspects.
              </p>
            </div>
            <div className="col-12">
              <div className="filter-links filterable-nav" data-aos="fade-left" data-aos-delay="300">
                <select className="mobile-filter">
                  <option value="*">Show all</option>
                  <option value=".partners">Partners</option>
                  <option value=".associates">Associates</option>
                  <option value=".paralegal">Paralegal</option>
                </select>
                <a href="#" className="wow fadeInRight current" data-filter="*">
                  Show all
                </a>
                <a
                  href="#"
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                  data-filter=".partners"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                  data-filter=".associates"
                >
                  Associates
                </a>
                <a
                  href="#"
                  className="wow fadeInRight"
                  data-wow-delay=".8s"
                  data-filter=".paralegal"
                >
                  Paralegal
                </a>
              </div>
            </div>
            <div className="row">
              {Data.map(({ id, image, title, description }) => (
                <div className="col-3" key={id}>
                  <div className="blog-detail mb-3">
                    <div className="card-img">
                      <img src={image} data-aos="fade-down" data-aos-delay="750" className="img-fluid w-100" alt="blog" />
                    </div>
                    <div className="blog-content-data">
                      <h5 className="title">{title}</h5>
                      <p className="desc">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {Data.map(({ id, image, title, description }) => (
                <div className="col-3" key={id}>
                  <div className="blog-detail mb-3">
                    <div className="card-img">
                      <img src={image} data-aos="fade-down" data-aos-delay="750" className="img-fluid w-100" alt="blog" />
                    </div>
                    <div className="blog-content-data">
                      <h5 className="title">{title}</h5>
                      <p className="desc">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
       
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Testemonial />
      </section>
      <hr />

     
      <Footer2 />
    </>
  );
};

export default Team;
