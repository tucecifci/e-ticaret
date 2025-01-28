import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

function Header() {
  return (
    <div className="flex items-center justify-between mt-40">
      {/* Logo ve Başlık */}
      <div className="flex items-center">
        <img className="w-12" src="/src/assets/bird-logo.png" alt="logo" />
        <h1 className="font-black ml-2">Pick&Pay</h1>
      </div>

      {/* Arama ve Sepet Grubu */}
      <div className="flex items-center border-b-2 border-gray-400">
        <input
          type="text"
          placeholder="search"
          className="px-4 py-1 focus:outline-none placeholder-gray-500"
        />
        <CiShoppingCart className="text-2xl text-gray-500 cursor-pointer ml-2" />
      </div>

      {/* Güneş ve Ay İkonları */}
      <div className="flex items-center space-x-4">
        <MdOutlineWbSunny className="text-xl text-gray-500 cursor-pointer" />
        <IoMdMoon className="text-xl text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
