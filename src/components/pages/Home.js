import React from "react";
import Carousel from "../carousal/Carousel";
import BlogCard from "../Blog/BlogCard";
import Table1 from "../Tables/Table1";
import Table2 from "../Tables/Table2";
import Table3 from "../Tables/Table3";
import Table4 from "../Tables/Table4";
import Table5 from "../Tables/Table5";
import Table6 from "../Tables/Table6";
import Table7 from "../Tables/Table7";
import Table8 from "../Tables/Table8";
import Table9 from "../Tables/Table9";
import Blog1 from "../Blogs/Blog1";
import Blog2 from "../Blogs/Blog2";
import Blog3 from "../Blogs/Blog3";
import Blog4 from "../Blogs/Blog4";
import Testemonial from "../testmonial/Testemonial";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <>
      <section className="blog-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <Carousel/>
          </div>
        </div>
      </section>
      <hr />
      <section className="blog-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
         
              <h3 className="section-heading">Our Latest Blogs</h3>
         
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
      <section className="content-table home-wrapper-2">
        <Table1 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table2 />
      </section>
      <hr />
      <section className="content-area-2 home-wrapper-2 py-4">
        <Blog2 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table3 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table4 />
      </section>
      <hr />
      <section className="content-area-2 home-wrapper-2 py-4">
        <Blog3 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table5 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table6 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table7 />
      </section>
      <hr />
      <section className="content-area-2 home-wrapper-2 py-4">
        <Blog4 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table8 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Table9 />
      </section>
      <hr />
      <section className="content-table home-wrapper-2 py-3">
        <Testemonial />
      </section>
      <hr />

      <Footer />
    </>
  );
};

export default Home;
