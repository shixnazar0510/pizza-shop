import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { TargetContext } from "../../App";
const Index = () => {
  const nav = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "menu", path: "/menu" },
    { id: 3, name: "events", path: "/events" },
    { id: 4, name: "aboutus", path: "/aboutus" },
  ];
  const { t } = useTranslation();
  const onLanguage = (e) => {
    i18next.changeLanguage(e);
  };
  const { cart } = TargetContext();
  const [menus, setmenus] = useState(false);
  return (
    <div className=" sticky z-[80] top-0 left-0 right-0 ">
      <nav className=" text-white py-4 backdrop-opacity-15  bg-[#210A01]/95 pt-5 relative">
        <div className="container flex items-center justify-between w-full ">
          <Link className="text-[34px] font-extrabold text-[#FF6432] " to={"/"}>
            pizzashop
          </Link>
          <div className="lg:flex hidden items-center gap-10">
            {nav.map((navs) => {
              return (
                <ul key={navs.id} className="">
                  <Link
                    className="text-[17px] text-[#A3A3A3] hover:text-[#FE9C1C] hover:border-b-2  hover:border-b-[#FE9C1C] hover:duration-500 p-2"
                    to={navs.path}
                  >
                    {t(`nav.${navs.name}`)}
                  </Link>
                </ul>
              );
            })}
          </div>
          <div className="flex items-center md:gap-8 gap-2">
            <Link to={'/login'} className="py-1 md:py-3 md:px-12 px-4 bg-[#FE9C1C] rounded-3xl lg:block hidden  hover:shadow-2xl hover:bg-[#FFA959]">
              {t("nav.login")}
            </Link>
            <Link to={"/cart"}>
              <div className="relative ">
                <div className="  p-1.5 md:p-3 bg-[#FE9C1C] rounded-full hover:shadow-2xl hover:bg-[#FFA959]">
                  <ShoppingBag />
                </div>
                <span className="-top-[30%] -right-[10%] absolute bg-[#FE5C1C] w-[20px] h-[20px] md:w-[30px] md:h-[30px] flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </div>
            </Link>
            <div className="p-1 md:p-3 bg-[#FE9C1C] rounded-full ">
              <select
                className="bg-[#FE9C1C] outline-none rounded-lg"
                onChange={(e) => onLanguage(e.target.value)}
              >
                <option value="en">ENG</option>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </div>
            <div
              className="lg:hidden p-1 md:p-3 bg-[#FE9C1C] rounded-full font-medium  hover:shadow-2xl hover:bg-[#FFA959]"
              onClick={() => setmenus((menus) => !menus)}
            >
              {menus ? <X /> : <Menu />}
            </div>
          </div>
        </div>
        <div className="absolute top-[100%] z-50 bg-[#210A01]  left-0 right-0">
          <div className="container backdrop-blur-2xl ">
            {menus && (
              <div className="lg:hidden px-3 items-start gap-3 flex flex-col  py-3 ">
                {nav.map((navs) => {
                  return (
                    <Link
                      className="text-[17px] hover:bg-[#FE9C1C] w-full  text-[#A3A3A3]  p-1 rounded-xl hover:text-white"
                      to={navs.path}
                    >
                      {t(`nav.${navs.name}`)}
                    </Link>
                  );
                })}
                <Link to={'/login'} className=" rounded-xl lg:hidden p-1 hover:bg-[#FE9C1C] w-full text-start">
                  {t("nav.login")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Index;
