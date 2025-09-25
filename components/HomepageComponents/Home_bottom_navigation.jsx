"use client"
import React from "react";
import { Menu, MessageCircle, ShoppingCart , User , House } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home_bottom_navigation = ({className}) => {
  const router = useRouter()
  const toggleLoginPage = () => {
    router.push("/Login");
  }
  const toggleCartPage =() => {
    router.push("/Cart");
  }
  const toggleHomePage = () => {
    router.push("/");
  }

  return (
    <div className={`${className} fixed bottom-0 w-full h-18 border-t border-gray-200 grid grid-cols-12 justify-center items-center md:hidden z-50 bg-white`}>
      <div className="bottom__navigation col-span-3 px-2 cursor-pointer">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <Menu size={17} />
            <p>Categories</p>
        </div>
      </div>
      <div className="bottom__navigation col-span-2 cursor-pointer">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <MessageCircle size={17} />
            <p>Message</p>
        </div>
      </div>
      <div className="bottom__navigation bg-black text-white p-5 rounded-full -mt-10 border border-gray-400 col-span-2 cursor-pointer" onClick={toggleHomePage}>
        <div className="bottom_navigation_icons flex flex-col items-center" >
            <House size={17} />
            <p>Home</p>
        </div>
      </div>
      <div className="bottom__navigation col-span-2 cursor-pointer" >
        <div className="bottom_navigation_icons flex flex-col items-center" onClick={toggleCartPage}>
            <ShoppingCart size={17} />
            <p>Cart {`(0)`}</p>
        </div>
      </div>
      <div className="bottom__navigation col-span-3 cursor-pointer" onClick={toggleLoginPage}>
        <div className="bottom_navigation_icons flex flex-col items-center">
            <User size={17} />
            <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Home_bottom_navigation;
