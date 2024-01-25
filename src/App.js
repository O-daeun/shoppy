import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}
