import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Data from './Data'

const Testemonial = () => {
 
  return (
    <section className="testemonial container section" data-aos="fade-down" data-aos-delay="300">
      <h2 className="section__title">Our Client Says</h2>
      
      <Swiper
       className="testemonial__container"
       loop={true}
        spaceBetween={24}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} className="testimonial__img" alt={title} />
              <h3 className="testimonial__name mt-3">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testemonial;
