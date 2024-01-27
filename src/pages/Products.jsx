import React from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/firebase";
import { useQuery } from "react-query";
import Loading from '../components/ui/Loading';

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
