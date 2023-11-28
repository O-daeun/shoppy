import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import Products from './components/Products';
import Carts from './pages/Carts';
import AddProducts from './pages/AddProducts';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:itemId",
        element: <ProductDetails />,
      },
      {
        path: "carts",
        element: <Carts />
      },
      {
        path: "add",
        element: <AddProducts />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
