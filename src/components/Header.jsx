import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPencilAlt } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

export default function Header() {
  return (
    <header className="flex justify-between py-5">
      <Link to="/" className="flex text-pink-500 font-bold text-2xl">
        <SiShopee className="font-extrabold text-3xl" />
        Shoppy
      </Link>
      <nav className="flex items-center">
        <Link to="/products">Products</Link>
        <Link to="/carts">
          <FaShoppingCart />
        </Link>
        <Link to="/add">
          <FaPencilAlt />
        </Link>
        <button>LogIn</button>
      </nav>
    </header>
  );
}
