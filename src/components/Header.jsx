import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux"; // Redux verisini okumak için import

function Header() {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();

  // ✅ Sepetteki toplam ürün miktarını Redux'tan al
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="flex items-center justify-between !mt-10">
      {/* Logo ve Başlık */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-12" src="/src/assets/bird-logo.png" alt="logo" />
        <h1 className="font-black ml-2">Pick&Pay</h1>
      </div>

      <div className="flex items-center border-b-2 border-gray-400">
        <input
          type="text"
          placeholder="search"
          className="px-4 py-1 focus:outline-none placeholder-gray-500"
        />

        {/* 🛒 Sepet ikonu - Redux'tan gelen ürün sayısını göstermek için */}
        {totalItems > 0 && (
          <Badge badgeContent={totalItems} color="primary">
            <CiShoppingCart
              className="text-2xl text-gray-500 cursor-pointer ml-2"
              onClick={() => navigate("/cart")} // Sepet sayfasına yönlendirme
            />
          </Badge>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {theme ? (
          <MdOutlineWbSunny
            onClick={changeTheme}
            className="text-xl text-yellow-500 cursor-pointer"
          />
        ) : (
          <IoMdMoon
            className="text-xl text-gray-800 cursor-pointer"
            onClick={changeTheme}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
