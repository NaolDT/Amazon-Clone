import React from "react";
import { img } from "./img/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div className={classes.carouselContainer}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {img.map((imageItemLink, index) => (
          <SwiperSlide key={index}>
            <img src={imageItemLink} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.hero_image}></div>
    </div>
  );
}

export default CarouselEffect;