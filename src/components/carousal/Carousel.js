import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner"  >
          <div className="carousel-item active">
            <img
              src="/img/carousel-1.jpg"
              alt="Carousel Image"
             
            />
            <div className="carousel-caption">
              <h1 className="animated" data-aos="fade-down" data-aos-delay="600" >
                We Fight For Your Justice
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/img/carousel-2.jpg"
              alt="Carousel Image"
             
            />
            <div className="carousel-caption">
              <h1 className="animated" data-aos="fade-down" data-aos-delay="600" >
                We Prepared To Oppose For You
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/img/carousel-3.jpg"
              alt="Carousel Image"
            
            />
            <div className="carousel-caption">
              <h1 className="animated" data-aos="fade-up" data-aos-delay="600" >
                We Fight For Your Privilege
              </h1>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
