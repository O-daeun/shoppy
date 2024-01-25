import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPencilAlt } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  console.log(user);
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link
        to='/' //
        className='flex font-bold text-4xl text-brand'
      >
        <SiShopee />
        Shoppy
      </Link>
      <nav className='flex gap-4 items-center font-semibold text-lg'>
        <Link to='/products'>Products</Link>
        {user && (
          <Link to='/carts' className='text-xl'>
            <FaShoppingCart />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-xl'>
            <FaPencilAlt />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text={"login"} />}
        {user && <Button onClick={logout} text={"logout"} />}
      </nav>
    </header>
  );
}
