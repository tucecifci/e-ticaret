import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

function Header() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  }, [theme]);

  const changeTheme = () =>{
    setTheme(prevTheme => !prevTheme);
  }
  // const changeTheme = () =>{
  //     const root = document.getElementById("root");
  //     if(theme){
  //         root.style.backgroundColor = "black";
  //         root.style.color = "#fff";
  //     }else{
  //         root.style.backgroundColor = "#fff";
  //         root.style.color = "black";
  //     }
  //     setTheme(!theme);
  // }
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
        {theme ? (
          <MdOutlineWbSunny
            onClick={changeTheme}
            className="text-xl text-gray-500 cursor-pointer"
          />
        ) : (
          <IoMdMoon
            className="text-xl text-gray-500 cursor-pointer"
            onClick={changeTheme}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
