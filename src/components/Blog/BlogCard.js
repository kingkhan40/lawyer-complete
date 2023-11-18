import React from "react";
import Data from "../Blogs/BlogApi";

const BlogCard = () => {
  return (
    <div className="container">
    <div className="row">
              {Data.map(({ id, image, title, description }) => (
                <div className="col-3" key={id}>
                  <div className="blog-detail mb-3">
                    <div className="card-img">
                      <img src={image} data-aos="fade-up" data-aos-delay="750" className="img-fluid w-100" alt="blog" />
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
  );
};

export default BlogCard;
