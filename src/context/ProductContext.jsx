import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useQuery } from "react-query";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const { isLoading, error, data } = useQuery(["products"], async () => {
    return axios("/data/products.json").then((res) => res.data.items);
  });
  
  const [products, setProducts] = useState(data);
  return (
    <ProductContext.Provider
      value={{ isLoading, error, products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
