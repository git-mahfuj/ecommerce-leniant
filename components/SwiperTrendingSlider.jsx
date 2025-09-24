"use client";
import React from "react";
import {
  TrendingProductsOne,
  TrendingProductseight,
  TrendingProductsFourteen,
  TrendingProductseleven,
  TrendingProductsfifteen,
  TrendingProductsfive,
  TrendingProductsfour,
  TrendingProductsnine,
  TrendingProductsseven,
  TrendingProductssix,
  TrendingProductsten,
  TrendingProductsthirteen,
  TrendingProductsthree,
  TrendingProductstwo,
  TrendingProductstwelve,
} from "@/public/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperTrendingSlider = () => {
  const trendingSlider = [
    {
      id: 1,
      img: TrendingProductsOne,
      des: "Indian Kashmiri",
      sale: "17%",
      price: "1800 tk",
      offerPrice: 1490,
    },
    {
      id: 2,
      img: TrendingProductstwo,
      des: "(LS-21) Half Silk Sharee With Blouse",
      sale: "14%",
      price: "1500 tk",
      offerPrice: 1290,
    },
    {
      id: 3,
      img: TrendingProductsthree,
      des: "(LS-03) Dupion Silk Saree Block Printed",
      sale: "12%",
      price: "1470 tk",
      offerPrice: 1290,
    },
    {
      id: 4,
      img: TrendingProductsfour,
      des: "(LS-18) Half Silk Skin Print saree",
      sale: "16%",
      price: "1300 tk",
      offerPrice: 1090,
    },
    {
      id: 5,
      img: TrendingProductsfive,
      des: "(LS-27) Half Silk Skin Print Saree with Blouse Piece",
      sale: "17%",
      price: "1200 tk",
      offerPrice: 1000,
    },
    {
      id: 6,
      img: TrendingProductssix,
      des: "(LS-24) Semi Moslin Silk Digital Print Saree",
      sale: "30%",
      price: "1850 tk",
      offerPrice: 1290,
    },
    {
      id: 7,
      img: TrendingProductsseven,
      des: "(LS-23) Semi Moslin Slik Digital Print Saree",
      sale: "7%",
      price: "1500 tk",
      offerPrice: 1390,
    },
    {
      id: 8,
      img: TrendingProductseight,
      des: "(LS-25) Semi Moslin Silk Digital Print saree",
      sale: "7%",
      price: "1500 tk",
      offerPrice: 1390,
    },
    {
      id: 9,
      img: TrendingProductsnine,
      des: "(Ls-26) Semi Moslin Silk Digital Print Saree",
      sale: "17%",
      price: "1500 tk",
      offerPrice: 1390,
    },
    {
      id: 10,
      img: TrendingProductsten,
      des: "(LS-02) Half Silk Screen Print Saree",
      sale: "4%",
      price: "1350 tk",
      offerPrice: 1290,
    },
    {
      id: 11,
      img: TrendingProductseleven,
      des: "(Ls-16) half Silk Saree With Blouse",
      sale: "17%",
      price: "1350 tk",
      offerPrice: 1050,
    },
    {
      id: 12,
      img: TrendingProductstwelve,
      des: "Eif Collection",
      sale: "19%",
      price: "1290 tk",
      offerPrice: 1050,
    },
    {
      id: 13,
      img: TrendingProductsthirteen,
      des: "Tangail Slik Saree with Blouse Piece , Digital Print",
      sale: "29%",
      price: "1960 tk",
      offerPrice: 1390,
    },
    {
      id: 14,
      img: TrendingProductsFourteen,
      des: "Tangail Digital Printed Saree",
      sale: "14%",
      price: "1950tk",
      offerPrice: 1390,
    },
    {
      id: 15,
      img: TrendingProductsfifteen,
      des: "(Ls-13) Half Silk Skin Print Saree",
      sale: "31%",
      price: "1290tk",
      offerPrice: 890,
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
          350: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {trendingSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* container must be relative and have an explicit height so Image with fill can work */}
            <div className="relative w-full lg:w-[90%] h-70 overflow-hidden border border-gray-300 flex flex-col cursor-pointer transition-all duration-500 group hover:-translate-y-1 p-3">
              <div className="overflow-hidden">
                <Image
                  src={slide.img}
                  alt={`slider-${slide.id}`}
                  className="object-contain group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute top-1 right-1 px-2.5 py-3 bg-secondary rounded-full text-white text-sm">{slide.sale}</div>

              <p className="">{slide.des}</p>
              <span className="flex items-center gap-3">
                <del className="text-gray-500">{slide.price}</del>
                <p>{slide.offerPrice} tk</p>
              </span>
              <button className="px-3 py-1.5 bg-secondary text-white">Order now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTrendingSlider;
