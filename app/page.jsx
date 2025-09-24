"use client";
import Home_bottom_navigation from "@/components/Home_bottom_navigation";
import Sidebar from "@/components/Sidebar";
import { Logo } from "../public/constants";
import Image from "next/image";
import {
  ShareeCollectionPic,
  SalowarKameezPic,
  StylishScarfPic,
  FasionableShalPic,
  WesterSetPic,
  EidCollectionPic,
} from "../public/constants";

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
  EidCollectionOne, EidCollectionEight, EidCollectionFive, EidCollectionFour, EidCollectionNine, EidCollectionSeven, EidCollectionSix, EidCollectionTen, EidCollectionThree, EidCollectionTwo
} from "@/public/constants";

import "swiper/css";
import SwiperBannerSlider from "@/components/SwiperBannerSlider";
import gsap from "gsap";
import SwiperPopularSlider from "@/components/SwiperPopularSlider";
import SwiperTrendingSlider from "@/components/SwiperTrendingSlider";

export default function Home() {
  const bannerNavigationTitle = [
    {
      id: 1,
      title: "Sharee Collection",
      img: ShareeCollectionPic,
    },
    {
      id: 2,
      title: "Salowar Kameez",
      img: SalowarKameezPic,
    },
    {
      id: 3,
      title: "Stylish Scarf",
      img: StylishScarfPic,
    },
    {
      id: 4,
      title: "Fasionable Shal",
      img: FasionableShalPic,
    },
    {
      id: 5,
      title: "Wester Set",
      img: WesterSetPic,
    },
    {
      id: 6,
      title: "Eid Collection",
      img: EidCollectionPic,
    },
  ];

  const closeSidebar = () => {
    gsap.to("#sidebar", { left: "-100%", duration: 0.5 });
  };

  const SareeSlider = [
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
  ];

  const EidCollectionItems = [
    {
      id: 1,
      img: EidCollectionOne,
      des: "Indian Kashmiri",
      sale: "17%",
      price: "1800 tk",
      offerPrice: 1490,
    },
    {
      id: 2,
      img: EidCollectionTwo,
      des: "(LS-21) Half Silk Sharee With Blouse",
      sale: "14%",
      price: "1500 tk",
      offerPrice: 1290,
    },
    {
      id: 3,
      img: EidCollectionThree,
      des: "(LS-03) Dupion Silk Saree Block Printed",
      sale: "12%",
      price: "1470 tk",
      offerPrice: 1290,
    },
    {
      id: 4,
      img: EidCollectionFour,
      des: "(LS-18) Half Silk Skin Print saree",
      sale: "16%",
      price: "1300 tk",
      offerPrice: 1090,
    },
    {
      id: 5,
      img: EidCollectionFive,
      des: "(LS-27) Half Silk Skin Print Saree with Blouse Piece",
      sale: "17%",
      price: "1200 tk",
      offerPrice: 1000,
    },
    {
      id: 6,
      img: EidCollectionSix,
      des: "(LS-24) Semi Moslin Silk Digital Print Saree",
      sale: "30%",
      price: "1850 tk",
      offerPrice: 1290,
    },
    {
      id: 7,
      img: EidCollectionSeven,
      des: "(LS-23) Semi Moslin Slik Digital Print Saree",
      sale: "7%",
      price: "1500 tk",
      offerPrice: 1390,
    },
    {
      id: 8,
      img: EidCollectionEight,
      des: "(LS-25) Semi Moslin Silk Digital Print saree",
      sale: "7%",
      price: "1500 tk",
      offerPrice: 1390,
    },
    {
      id: 9,
      img: EidCollectionNine,
      des: "(Ls-26) Semi Moslin Silk Digital Print Saree",
      sale: "17%",
      price: "1500 tk",
      offerPrice: 1390,
    },
    {
      id: 10,
      img: EidCollectionTen,
      des: "(LS-02) Half Silk Screen Print Saree",
      sale: "4%",
      price: "1350 tk",
      offerPrice: 1290,
    },
  ]

  return (
    <div id="home" className="bg-gray-100 mt-36" onClick={closeSidebar}>
      {/* banner_section */}

      <div className="mt-4 md:mt-0 banner_section w-full h-[250px] md:h-[530px] bg-gray-100 grid grid-cols-1 md:grid-cols-12 px-4 py-3 gap-4">
        {/* banner__navigation */}

        <div className="banner__navigation hidden md:block col-span-4 bg-white h-fit w-full rounded-md lg:grid lg:w-3/5 lg:translate-x-[6rem]">
          <ul className="banner__navigation__title">
            {bannerNavigationTitle.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-200 cursor-pointer"
                >
                  <div className="banner__navigation__img w-10 h-10">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="banner__navigation__text font-medium text-gray-700">
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* banner__slider */}

        <div className="banner__slider col-span-8 lg:col-span-7 bg-white md:h-[470px] rounded-md">
          <SwiperBannerSlider />
        </div>
      </div>

      {/* Sidebar */}

      <div
        className="fixed top-0 -left-[100%] w-2/3 max-w-sm h-screen bg-white z-40 shadow-lg"
        id="sidebar"
      >
        <Sidebar onClick={closeSidebar} className="h-full" />
      </div>

      {/* bottom__navigation */}

      <Home_bottom_navigation className={`z-[999]`} />

      {/* popular_categories_slider */}

      <div className="w-full font-medium overflow-hidden bg-white">
        <div className="border-b border-gray-200 pb-4 text-start px-4 py-3 md:py-4">
          <div className="md:w-[80%] lg:w-[90%] xl:w-[1390px] mx-auto">
            <p className="text-xl ">Popular Categories</p>
          </div>
        </div>
        <div className="popular__slider px-3 md:px-0 w-full md:w-[80%] lg:w-[90%] xl:w-[1390px] mx-auto ">
          <SwiperPopularSlider />
        </div>
      </div>

      {/* Trending_products_slider */}

      <div className="w-full font-medium overflow-hidden bg-white mt-4">
        <div className="border-b border-gray-200 pb-4 text-start px-4 py-3 md:py-4 ">
          <div className="flex justify-between [80%] lg:w-[90%] xl:w-[1390px] mx-auto ">
            <p className="text-xl ">Trending Products</p>
            <button className="tending__btn px-4 py-2 bg-secondary text-white">
              View More
            </button>
          </div>
        </div>
        <div className="popular__slider w-full md:w-[90%] lg:w-[90%] xl:w-[1390px] mx-auto ">
          <SwiperTrendingSlider />
        </div>
      </div>

      {/* Saree collection */}

      <div className="w-full font-medium overflow-hidden bg-white mt-4">
        <div className="border-b border-gray-200 pb-4 text-start px-3 py-3 md:py-4 flex justify-between">
          <div className="[80%] lg:w-[90%] xl:w-[1390px] mx-auto ">
            <p className="text-xl">Saree Collection</p>
          </div>
        </div>
        <div className="mt-6 Saree_Container w-full lg:w-[90%] xl:w-[1390px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-2 px-2">
          {SareeSlider.map((slide) => (
            <div key={slide.id}>
              <div className="relative w-full lg:w-[90%] h-70 border border-gray-300 flex flex-col cursor-pointer transition-all duration-500 overflow-hidden  p-3">
                <div className="overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={`slider-${slide.id}`}
                    className="object-contain  transition-all duration-700"
                  />
                </div>
                 <div className="absolute top-1 right-1 px-2.5 py-3 bg-secondary rounded-full text-white text-sm">{slide.sale}</div>
                <p className="">{slide.des}</p>
                <span className="flex items-center gap-3">
                  <del className="text-gray-500">{slide.price}</del>
                  <p>{slide.offerPrice} tk</p>
                </span>
                <button className="px-3 py-1.5 bg-secondary text-white cursor-pointer">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eid collection  */}

      <div className="w-full font-medium overflow-hidden bg-white mt-4 mb-3">
        <div className="border-b border-gray-200 pb-4 text-start px-3 py-3 md:py-4 flex justify-between">
          <div className="[80%] lg:w-[90%] xl:w-[1390px] mx-auto ">
            <p className="text-xl">Eid Collection</p>
          </div>
        </div>
        <div className="mt-6 Eid_Collection_Container w-full lg:w-[90%] xl:w-[1390px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-2 px-2">
          {EidCollectionItems.map((slide) => (
            <div key={slide.id}>
              <div className="relative w-full lg:w-[90%] h-70 overflow-hidden border border-gray-300 flex flex-col cursor-pointer transition-all duration-500  p-3">
                <div className="overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={`slider-${slide.id}`}
                    className="object-contain  transition-all duration-700"
                  />
                </div>
                <div className="absolute top-1 right-1 px-2.5 py-3 bg-secondary rounded-full text-white text-sm">{slide.sale}</div>

                <p className="">{slide.des}</p>
                <span className="flex items-center gap-3">
                  <del className="text-gray-500">{slide.price}</del>
                  <p>{slide.offerPrice} tk</p>
                </span>
                <button className="px-3 py-1.5 bg-secondary text-white cursor-pointer">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
