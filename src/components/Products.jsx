import React from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

export default function Products() {
  const [isLoading, error, products, setProducts] = useOutletContext();
  return (
    <>
      <button
        onClick={() =>
          setProducts((prev) => [
            ...prev,
            {
              name: "daeun",
              id: "4",
              price: "d",
              gender: "du",
              option: "d",
              detail: "g",
              image: "d",
            },
          ])
        }
      >
        클릭
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>error❗</p>}
      {products && (
        <ul>
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}
