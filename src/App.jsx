import React, { createContext, useContext, useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Menu from "./components/Menu";
import Events from "./components/section3";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from "react-router-dom";
const YaratuvchiContext = createContext();
export const WrapContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (foo) => {
    setCart((prev) => [...prev, foo]);
  };
  const removeCart = (goo) => {
    setCart((prev) => prev.filter((foo) => foo.id !== goo));
  };
  return (
    <YaratuvchiContext.Provider value={{ addToCart, cart,removeCart }}>
      {children}
    </YaratuvchiContext.Provider>
  );
};
export const TargetContext = () => useContext(YaratuvchiContext);
const Index = () => {
  return (
    <WrapContext>
      <div>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/menu"} element={<Menu />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/aboutus"} element={<Aboutus />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </WrapContext>
  );
};
export default Index;
