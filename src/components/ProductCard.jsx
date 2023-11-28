import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() =>
        navigate(`/products/${item.id}`, { state: { itemId: item.id } })
      }
    >
      <img className="w-60" src={item.image} alt="" />
      <div>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{item.gender}</p>
      </div>
    </li>
  );
}
