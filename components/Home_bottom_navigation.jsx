import React from "react";
import { Menu, MessageCircle, ShoppingCart , User , House } from "lucide-react";

const Home_bottom_navigation = () => {
  return (
    <div className="fixed bottom-0 w-full h-18 border-t border-gray-200 flex justify-around items-center md:hidden">
      <div className="bottom__navigation">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <Menu size={17} />
            <p>Categories</p>
        </div>
      </div>
      <div className="bottom__navigation">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <MessageCircle size={17} />
            <p>Message</p>
        </div>
      </div>
      <div className="bottom__navigation bg-black text-white p-5 rounded-full -mt-10 border border-gray-400">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <House size={17} />
            <p>Home</p>
        </div>
      </div>
      <div className="bottom__navigation">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <ShoppingCart size={17} />
            <p>Cart {`(0)`}</p>
        </div>
      </div>
      <div className="bottom__navigation">
        <div className="bottom_navigation_icons flex flex-col items-center">
            <User size={17} />
            <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Home_bottom_navigation;
