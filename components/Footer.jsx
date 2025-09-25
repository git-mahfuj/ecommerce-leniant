"use client";
import React from "react";
import Image from "next/image";
import { backgroundLogo, facebookLeinant, Leinant } from "@/public/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className=" bg-footerBackground h-[630px] md:h-[400px] w-full text-white relative">
        <div className=" md:grid md:grid-cols-12 md:items-center">
          <div className="footer__logo flex flex-col justify-center items-center text-white gap-1 pt-3 md:col-span-4">
            <Image src={backgroundLogo} alt="background" width={130} />
            <p>208 Road , Balur Math , NarayanGanj 1400</p>
            <p>+880 09636815095</p>
          </div>
          <div className="grid grid-cols-2 md:grid md:grid-cols-3 md:col-span-8 mt-3 px-4 gap-3">
            <div className="important_links">
              <p className="py-2 border-b-2 border-secondary text-center text-xl">
                Important links
              </p>
              <ul className="flex flex-col justify-center items-center gap-1 mt-1">
                <li>Contact us</li>
                <li>Order procedure</li>
                <li>Delivery Rules</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div className="Links">
              <p className="border-b-2 border-secondary text-center text-xl py-2">
                Links
              </p>
              <ul className="flex flex-col mt-1 justify-center items-center">
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="facebook flex flex-col justify-center items-center">
              <p className="py-2 border-b-2 border-secondary text-center text-xl">
                Stay with us in facebook
              </p>
              <div className="footer__facebook relative mt-2 w-[240px]">
                <Image
                  src={facebookLeinant}
                  alt="haker"
                  className="shadow-md"
                />
                <div className="absolute top-0 px-1 py-1 flex flex-col justify-between">
                  <div className="flex gap-2">
                    <Image src={Leinant} width={50} alt="leniant" />
                    <div className="flex flex-col items-start shadow-md font-medium">
                      <p>Leniant</p>
                      <p>9,069 followers</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center items-center gap-12 w-full">
                    <button className="px-2 py- bg-white text-gray-600 text-sm">
                      Follow Page
                    </button>
                    <button className="px-2 py- bg-white text-gray-600 text-sm">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__copy w-full h-[100px] bg-black text-gray-500 mt-3 md:text-center md:h-[50px] md:mt-33">
          <p className="text-sm px-4 py-1 md:text-xl">
            © {year} Leniant. All rights reserved. Design &amp; Developed By Mahfujur Rahman
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
