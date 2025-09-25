import React from "react";
import Home_bottom_navigation from "@/components/HomepageComponents/Home_bottom_navigation";

const Cartpage = () => {
  return (
    <div
      className="cart__page mt-30 h-[1200px] bg-gray-200 grid grid-cols-1
     justify-center items-center gap-0 px-3 md:grid md:grid-cols-1 md:justify-baseline md:items-center md:w-full lg:gird lg:grid-cols-2 lg:gap-14 lg:px-18 xl:px-56 lg:h-[700px]"
    >
      <div className="rounded-lg LoginPage h-[420px] w-full bg-white">
        <div className="p-3 text-xl border-b border-gray-200">
          <p className="font-medium">Order Details</p>
        </div>
        <div className="px-3 w-full">
          <div className="order-table h-fit border border-gray-200 w-full mt-4">
            <div className="grid border-b h-[50px] border-gray-200 grid-cols-12 justify-center items-center">
              <p className="col-span-2 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Delete
              </p>
              <p className="col-span-4 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Product
              </p>
              <p className="col-span-3 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Amount
              </p>
              <p className="col-span-3 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Price
              </p>
            </div>
            <div className="grid border-b h-[50px] border-gray-200 grid-cols-12 justify-center items-center">
              <p className="col-span-9 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Total
              </p>
              <p className="col-span-3 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                0 tk
              </p>
            </div>
            <div className="grid border-b h-[50px] border-gray-200 grid-cols-12 justify-center items-center">
              <p className="col-span-9 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Delivery Charge
              </p>
              <p className="col-span-3 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                80 tk
              </p>
            </div>
            <div className="grid border-b h-[50px] border-gray-200 grid-cols-12 justify-center items-center">
              <p className="col-span-9 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                Grand total
              </p>
              <p className="col-span-3 text-center font-medium border-r h-full border-gray-200 flex justify-center items-center">
                80 tk
              </p>
            </div>
          </div>
        </div>
        <div className="border-t mt-3 bg-gray-100 border-gray-200">
          <div className="px-3 py-2 font-medium">
            <p>
              Note — please be 100% sure before placing an order. Even if the
              product matches the picture and description, if you refuse to
              accept the product, you must pay the courier charge to the
              delivery person at the time of return: Dhaka city: ৳80 / Outside
              Dhaka: ৳130. Please refrain from ordering unnecessarily, because
              your mobile number, address, and device IP are visible. Click to
              add more products under the same delivery charge.
            </p>
          </div>
        </div>
      </div>
      <div className="cart__order rounded-lg Page h-[580px] w-full bg-white">
        <form action="">
          <div className="customerLogin w-full border-b border-gray-300 p-4">
            <p className="text-xl font-medium">To confirm your order, please fill in the required information and click the "Place Order" button. To order by phone, click on this number: +88 09636815095.</p>
          </div>
          <div className="input px-3 py-3 flex flex-col gap-3">
            <div>
              <label className="font-medium" htmlFor="">
                Your Name :
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg "
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                Your Number :
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg "
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                Address :
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg "
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                Select Delivery Area :
              </label>
              <select
                type="text"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-lg cursor-pointer">
                  <option className="cursor-pointer" value="">In Dhaka : 80 tk</option>
                  <option className="cursor-pointer" value="">OutSide Dhaka : 130 tk</option>
              </select>
            </div>
            <div>
              <label className="font-medium" htmlFor="">
                Select Delivery Area :
              </label>
              <div className="flex gap-4 items-center mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryArea"
                    value="in_dhaka"
                    className="form-radio h-4 w-4 text-secondary"
                  />
                  <span className="text-gray-400 font-medium">Cash On Delivery</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryArea"
                    value="outside_dhaka"
                    defaultChecked
                    className="form-radio h-4 w-4 text-secondary"
                  />
                  <span className="text-gray-400 font-medium">Bkash</span>
                </label>
                
              </div>
              <div className="flex flex-col justify-center items-center mt-3 px-3 gap-2">
            <button className="cursor-pointer w-full bg-secondary px-3 py-2 text-white font-medium rounded-md">Order Now</button>
          </div>
            </div>
          </div>
          
        </form>
      </div>
      {/* bottom__navigation */}

      <Home_bottom_navigation className={`z-[999]`} />
    </div>
  );
};

export default Cartpage;
