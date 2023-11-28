import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], async () => {
    return axios("/data/products.json").then((res) => res.data.items);
  });
  return (
    <>
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
