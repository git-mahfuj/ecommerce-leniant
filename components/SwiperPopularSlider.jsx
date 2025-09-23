"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";

import {
  PopularCategoriesOne,
  PopularCategoriesTwo,
  PopularCategoriesThree,
  PopularCategoriesFour,
  PopularCategoriesFive,
  PopularCategoriesSix,
} from "@/public/constants";

const SwiperPopularSlider = () => {
  const popularSlider = [
    { id: 1, img: PopularCategoriesOne },
    {
      id: 2,
      img: PopularCategoriesTwo,
    },
    {
      id: 3,
      img: PopularCategoriesThree,
    },
    {
      id: 4,
      img: PopularCategoriesFour,
    },
    {
      id: 5,
      img: PopularCategoriesFive,
    },
    {
      id: 6,
      img: PopularCategoriesSix,
    },
  ];
  return (
    <div className="mt-8 px-2 lg:px-8 mb-8">
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          350: {slidesPerView : 2 },  
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {popularSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* container must be relative and have an explicit height so Image with fill can work */}
            <div className="relative w-full lg:w-[90%] h-53 md:h-48 lg:h-56 rounded-xl overflow-hidden border-4 border-secondary">
              <Image
                src={slide.img}
                alt={`slider-${slide.id}`}
                fill
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPopularSlider;
