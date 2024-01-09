import { Outlet } from "react-router-dom";
import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  const [products, setProducts] = useState([]);
  const { isLoading, error, data } = useQuery(["products"], async () => {
    return axios("/data/products.json").then((res) => res.data.items);
  });

  const handleAdd = (item) => setProducts([...products, item]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet context={{isLoading, error, products, handleAdd}} />
    </AuthContextProvider>
  );
}
