import React from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="bg-gray-200 py-4 text-center">
      <div className="max-w-4xl mx-auto flex justify-around items-center">
        <Link to="/jewelry" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Jewelry & Accessories</Link>
        <Link to="/clothing" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Clothing & Shoes</Link>
        <Link to="/home" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Home & Living</Link>
        <Link to="/wedding" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Wedding & Party</Link>
        <Link to="/toys" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Toys & Entertainment</Link>
        <Link to="/art" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Art & Collectibles</Link>
        <Link to="/crafts" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Craft Supplies & Tools</Link>
        <Link to="/vintage" className="inline-block px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Vintage</Link>
      </div>
    </div>
  );
};

export default SubHeader;
