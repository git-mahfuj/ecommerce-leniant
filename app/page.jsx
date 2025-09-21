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
  SliderImgOne,
  SliderImgTwo,
} from "../public/constants";

import "swiper/css";
import SwiperBannerSlider from "@/components/SwiperBannerSlider";

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

  return (
    <>
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

      {/* bottom__navigation */}


      <Home_bottom_navigation className={`z-[999]`} />
    </>
  );
}
