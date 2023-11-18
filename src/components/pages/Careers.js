import React from "react";
import Carousel from "../carousal/Carousel";
import Blog1 from "../Blogs/Blog1";
import { CareerData, CareerData2 } from "../Blogs/BlogApi";
import Testemonial from "../testmonial/Testemonial";
import Footer2 from "../Footer/Footer2";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Careers = () => {
  return (
    <>
      <section className="blog-wrapper  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <Carousel />
          </div>
        </div>
      </section>
      <hr />
      <section className="career-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Blog1 />
            </div>
          </div>
          <hr />

          <div className="row py-4 p-3">
            {CareerData.map(({ id, image, title, desc }) => (
              <>
                <div className="col-4 mb-3" data-aos="fade-right" data-aos-delay="300" key={id}>
                  <div className="card-img">
                    <img src={image} className="img-fluid" alt="blog" />
                  </div>
                </div>
                <div className="col-8 mt-3 mb-4" data-aos="fade-left" data-aos-delay="300">
                  <div className="blog-content-data">
                    <h2 className="title">{title}</h2>
                    <p className="text mt-4">{desc}</p>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              <ul class="list_gen">
                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Oversee organization's legal interests;
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Maintaining its operations within the scope established by
                    law;
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Responsible for Co-ordination and overseeing all Litigation;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Should be capable to handle potential legal matters,
                    including analysis, evaluation and defense of any legal
                    disputes;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Monitor changes in Government Laws and Regulations effecting
                    departmental operations;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Should be responsible to structure the stock and bond
                    offerings and the banks insurance loans that provide
                    enterprises with capital;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Vet Legal documents (MOU, Agreements etc);
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Assist in reviewing, and finalizing joint venture /
                    strategic partnership agreements;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Communicate Government laws and regulations affecting the
                    company's operations;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Provide legal opinion to the Board of directors, CEO and
                    Executive Management Team;
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Examine agreements prior to the execution within company's
                    policy, viewpoint and best interest; and
                  </p>
                </li>

                <li>
                  <p>
                    <BsFillCheckCircleFill className="icon" />
                    Should be well aware of labour law acts.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row py-4 p-3">
            {CareerData2.map(({ id, image, title, desc }) => (
              <>
                <div className="col-4 mb-4" data-aos="fade-left" data-aos-delay="300" key={id}>
                  <div className="card-img">
                    <img src={image} className="img-fluid" alt="blog" />
                  </div>
                </div>
                <div className="col-8 mt-3 mb-4" data-aos="fade-right" data-aos-delay="300">
                  <div className="blog-content-data">
                    <h2 className="title">{title}</h2>
                    <p className="text mt-4">{desc}</p>
                  </div>
                </div>
                <hr />
              </>
            ))}
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

export default Careers;
