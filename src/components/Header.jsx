import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1><Link to=''>Shoppy</Link></h1>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>장바구니</Link>
        <button>LogIn</button>
      </nav>
    </header>
  );
}

