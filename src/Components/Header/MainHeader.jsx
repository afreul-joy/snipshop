import React from "react";
import logo from "/src/assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div
      style={{ backgroundColor: "#1E66FF" }}
      className=" p-4 flex items-center justify-between"
    >
      <Link to="/">
        <div className="flex ">
          <div className="bg-white rounded-2xl p-4 relative">
            <img
              src={logo}
              alt="Banner"
              className="h-4 w-auto absolute top-2 left-2"
            />
            <img
              src={logo}
              alt="Banner"
              className="h-4 w-auto absolute top-2 left-4"
            />
          </div>
          <div>
            <p className="text-black font-bold ml-2">SnipShop</p>
          </div>
        </div>
      </Link>

      {/* Middle: Search */}
      <div className="flex relative items-center rounded-2xl">
        <input
          type="text"
          placeholder="Search"
          className="bg-white w-[120px] lg:w-[600px] text-white px-4 py-2 rounded-2xl focus:outline-none"
        />
        <button
          style={{ backgroundColor: "rgba(77, 195, 247, 1)" }}
          className="text-white absolute right-0 p-3 lg:px-6 rounded-2xl "
        >
          <AiOutlineSearch />
        </button>
      </div>

      {/* Right Side: Account, My Items, Cart, Hamburg Menu */}
      <div className="flex items-center space-x-2 md:space-x-4 ml-2">
        <a href="#" className="text-white flex items-center">
          <AiOutlineUser size="1.5em" />{" "}
          <p className="ml-1 hidden md:block">Account</p>
        </a>
        <a href="#" className="text-white flex items-center">
          <FaRegHeart size="1em" className="mr-1" />
          <p className="ml-1 hidden md:block">My Items</p>
        </a>
        <a href="#" className="text-white">
          <HiOutlineShoppingBag size="1.5em" />
        </a>
        <button className="text-white md:hidden">
          <BsList size="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
