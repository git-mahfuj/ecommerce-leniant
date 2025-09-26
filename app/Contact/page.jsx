"use client";
import React from "react";
import Home_bottom_navigation from "@/components/HomepageComponents/Home_bottom_navigation";

import { useRouter } from "next/navigation";

const Contactpage = () => {
  const router = useRouter();

  const toggleOrderPage = () => {
    router.push("/OrderProcedure");
  };
  const toggleDeliveryPage = () => {
    router.push("/DeliveryRules");
  };
  const toggleReturnPage = () => {
    router.push("/ReturnPolicy");
  };
  const toggleTermsPage = () => {
    router.push("/TermsCondition");
  };
  const togglePrivacyPage = () => {
    router.push("/PrivacyPolicy");
  };
  return (
    <div className="h-[700px] w-full">
      <div className="mt-35 rounded-lg ContactPage w-full bg-white">
        <div className="Contact_Nav w-full h-[80px] bg-gray-200">
          <ul className="w-full flex items-center justify-around translate-y-8 font-medium">
            <li
              className="cursor-pointer transition-all duration-300 hover:text-secondary"
              onClick={toggleOrderPage}
            >
              Order Procedure
            </li>
            <li
              className="cursor-pointer transition-all duration-300 hover:text-secondary"
              onClick={toggleDeliveryPage}
            >
              Delivery Rules
            </li>
            <li
              className="cursor-pointer transition-all duration-300 hover:text-secondary"
              onClick={toggleReturnPage}
            >
              Return Policy
            </li>
            <li
              className="cursor-pointer transition-all duration-300 hover:text-secondary"
              onClick={toggleTermsPage}
            >
              Terms and Conditions
            </li>
            <li
              className="cursor-pointer transition-all duration-300 hover:text-secondary"
              onClick={togglePrivacyPage}
            >
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      {/* bottom__navigation */}

      <Home_bottom_navigation className={`z-[999]`} />
    </div>
  );
};

export default Contactpage;
