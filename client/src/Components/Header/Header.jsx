import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import ActivityDropdown from "./ActivityDrop";
import MenuDropdown from "./UserDrop";
import Popup from "../CreatePost/Popup";

const Header = () => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="flex items-center justify-between max-w-[950px] mx-auto p-2 mt-2">
      
        {/* Left */}

        <div>
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
        </div>

        {/* Middle */}

        <div className="hidden md:flex ">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <AiOutlineSearch className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-200 rounded-md block w-full p-[7px] pl-[40px] sm:text-sm border-gray focus:ring-black focus:border-black"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right */}

        <div className="flex items-center  space-x-6 text-2xl">
          <Link to="/">
            <AiFillHome />
          </Link>
          <div className="relative">
            <Link to="/">
              <RiMessengerLine />
            </Link>
          </div>

          <Popup/>
          <Link to="/">
            <MdOutlineExplore />
          </Link>
          
            <ActivityDropdown/>
          
          
            <MenuDropdown/>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
