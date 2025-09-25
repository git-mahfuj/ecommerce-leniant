"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import { SliderImgOne, SliderImgTwo } from "../../public/constants";
import Image from "next/image";

const SwiperBannerSlider = ({ className }) => {
  const bannerSlider = [
    { id: 1, img: SliderImgOne },
    { id: 2, img: SliderImgTwo },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
    >
      {bannerSlider.map((slide) => (
        <SwiperSlide key={slide.id}>
          {/* container must be relative and have an explicit height so Image with fill can work */}
          <div className="relative w-full h-[226px] md:h-[470px] rounded-md">
            <Image
              src={slide.img}
              alt={`slider-${slide.id}`}
              fill
              className=" rounded-md"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBannerSlider;
