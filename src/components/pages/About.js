import React from "react";
import Carousel from "../carousal/Carousel";
import BlogCard from "../Blog/BlogCard";
import Blog1 from "../Blogs/Blog1";
import Testemonial from "../testmonial/Testemonial";
import Footer2 from "../Footer/Footer2";

const About = () => {
  return (
    <>
      <section className="blog-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <Carousel />
          </div>
        </div>
      </section>
      <hr />
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <h2>LLP | LAW FIRM NEWS & EVENTS - PAKISTAN</h2>
          <div className="row">
            <div className="col-12">
              <BlogCard/>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="content-area home-wrapper-2 py-4">
        <Blog1 />
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

export default About;
