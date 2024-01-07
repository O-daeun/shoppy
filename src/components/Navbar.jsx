import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPencilAlt } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { login, logout, onUserStateChange } from "../api/firebase";

export default function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => onUserStateChange(setUser), [user]);

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(() => setUser(null));
  };
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex font-bold text-4xl text-brand'>
        <SiShopee />
        Shoppy
      </Link>
      <nav className='flex gap-4 items-center font-semibold text-lg'>
        <Link to='/products'>Products</Link>
        <Link to='/carts' className='text-xl'>
          <FaShoppingCart />
        </Link>
        <Link to='/products/new' className='text-xl'>
          <FaPencilAlt />
        </Link>
        {user && (
          <div className='flex items-center gap-2'>
            <img src={user.photoURL} className='rounded-full w-10' />
            <p>{user.displayName}</p>
          </div>
        )}
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
