"use client";
import React from "react";
import Home_bottom_navigation from "@/components/HomepageComponents/Home_bottom_navigation";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const toggleLoginPage = () => {
    router.push("/Login");
  }
  return (
    <div className="bg-gray-200 h-[700px] px-3 flex justify-center items-center md:overflow-hidden">
      <div className="mt-35 rounded-lg LoginPage h-[450px] w-full bg-white md:w-[500px] ">
        <div>
          <div className="customerLogin w-full border-b border-gray-300 p-4">
            <p className="text-xl font-medium">Customer Registration</p>
          </div>
          <form action="">
            <div className="input px-3 py-3 flex flex-col gap-3">
              <div>
                <label className="font-medium" htmlFor="">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <label className="font-medium" htmlFor="">
                  Mobile Number :
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <label className="font-medium" htmlFor="">
                  Password :
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg "
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-3 px-3 gap-2">
              <button className="cursor-pointer w-full bg-secondary px-3 py-2 text-white font-medium rounded-md">
                Register
              </button>
            </div>
          </form>

          <div className="w-full flex flex-col justify-center items-center mt-3 px-3 gap-2">
            <p className="cursor-pointer">Have Registered ???</p>
            <button
              onClick={toggleLoginPage}
              className="cursor-pointer border border-gray-200 w-full rounded-md py-2 font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* bottom__navigation */}

      <Home_bottom_navigation className={`z-[999]`} />
    </div>
  );
};

export default SignUpPage;
