"use client";
import Image from "next/image";
import React from "react";
import { X, ArrowDownRight } from "lucide-react";
import { Logo } from "@/public/constants";
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

import gsap from "gsap";

const Sidebar = ({ id, className , onClick }) => {
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
  return (
    <div id={`${id}`} className={`${className} h-full flex flex-col`}>
      {/* Logo */}
      <div className="side__logo flex justify-around items-center gap-18 border-b border-gray-200 pt-3 pb-4">
        <Image src={Logo} />
        <div onClick={closeSidebar} id="close-button" className="px-4">
          <X
            size={32}
            className="hover:text-secondary transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="sidebar__navigation mt-5 px-6 overflow-y-auto flex-1">
        <ul className="navigation__list flex flex-col gap-6 font-medium">
          {bannerNavigationTitle.map((item) => (
            <li key={item.id} className="navigation__item">
              <a
                href="#"
                className="navigation__link flex items-center gap-3 relative hover:text-secondary transition-all duration-300"
              >
                <Image src={item.img} alt={item.title} width={24} height={24} />
                <span>{item.title}</span>
                <span className="absolute right-0">
                  <ArrowDownRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
