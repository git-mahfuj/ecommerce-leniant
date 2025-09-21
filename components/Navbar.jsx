import React from "react";
import { Search, Menu, CircleChevronRight, User } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/public/constants";

const Navbar = () => {
  return (
    <>
      <div className="nav__bar relative grid grid-cols-1 justify-center items-center mt-5 gap-5 md:grid md:grid-cols-3 md:w-full ">
        <div className="nav__navigation flex justify-around items-center gap-12">
          <div className="nav__menu cursor-pointer md:hidden">
            <Menu size={27} style={{ fontWeight: "12px" }} />
          </div>
          <div className="nav__logo">
            <Image src={Logo} alt="logo" width={180} className="md:w-[230px]" />
          </div>
          <div className="nav__icons cursor-pointer md:absolute md:right-24 lg:right-34 md:top-1/2 md:-translate-y-1/2 md:translate-x-6 md:z-0 md:transform md:flex md:gap-6">
            <div className="lord__truck hidden md:block ">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/pkyxcgiq.json"
                trigger="hover"
                colors="primary:#3a3347,secondary:#de236e,tertiary:#de236e,quaternary:#242424"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </div>
            <div className="lord__cart">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/pmawqxvu.json"
                trigger="hover"
                colors="primary:#de236e,secondary:#646e78,tertiary:#3a3347"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </div>
          </div>
        </div>
        <div className="nav__search grid">
          <form
            action=""
            className="relative w-3/4 md:mx-0 md:w-full mx-auto md:z-20"
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-black md:border-secondary px-3 py-1.5 placeholder:text-gray-500 placeholder:font-normal rounded-md"
            />
            <button className="bg-black md:bg-secondary text-white px-4 rounded-r-md  py-2 absolute top-0 right-0 h-full flex items-center justify-center cursor-pointer">
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 nav__secondbar hidden md:block bg-secondary w-full h-14">
        <div className="secondbar__navigation grid grid-cols-12 justify-center py-3 items-center text-white">
          <div className="col-span-2">
            <p className="text-center text-xl cursor-pointer">Catagories</p>
          </div>
          <div className="col-span-6">
            <button className="flex items-center gap-14">
              <CircleChevronRight />
              <div className="hidden lg:flex lg:gap-4 text-center text-xl">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Shop</p>
              </div>
            </button>
          </div>
          <div className="flex items-center gap-9 col-span-4">
            <p className="text-xl">Contact Us</p>
            <div className="flex items-center gap-1">
              <User />
              <div className="flex gap-2 items-center text-xl">
                <p className="cursor-pointer">Login</p>
                <p>/</p>
                <p className="cursor-pointer">Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
