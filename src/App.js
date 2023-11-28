import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const { isLoading, error, data } = useQuery(["products"], async () => {
    return axios("/data/products.json").then((res) => res.data.items);
  });

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="max-w-7xl m-auto px-5">
      <Header />
      <Outlet context={[isLoading, error, products, setProducts]} />
    </div>
  );
}
