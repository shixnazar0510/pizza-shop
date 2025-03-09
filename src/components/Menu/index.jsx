import React, { useState } from "react";

import Menu1 from "../../assets/menu1.png";
import Menu2 from "../../assets/menu2.png";
import Menu3 from "../../assets/menu3.png";
import Menu4 from "../../assets/menu4.png";
import Sectionimg00 from "../../assets/sectionimg00.png";
import { useTranslation } from "react-i18next";
import { TargetContext } from "../../App";

const Index = () => {
  const { addToCart, cart } = TargetContext();
  const Menu = [
    {
      id: 1,
      name: "italian",
      img: Menu1,
      price: 8.35,
      text: "textmenus",
    },
    {
      id: 2,
      name: "venecia",
      img: Menu2,
      price: 7.35,
      text: "textmenus",
    },
    {
      id: 3,
      name: "meat",
      img: Menu3,
      price: 9.35,
      text: "textmenus",
    },
    {
      id: 4,
      name: "argentina",
      img: Menu4,
      price: 7.35,
      text: "textmenus",
    },
    {
      id: 5,
      name: "gribnaya",
      img: Menu2,
      price: 6.35,
      text: "textmenus",
    },
    {
      id: 6,
      name: "tomato",
      img: Menu3,
      price: 7.35,
      text: "textmenus",
    },
  ];


  // const [menucount, setmenucount] = useState(1);
  const [menuprice, setmenuprice] = useState(false);
  const [menuprices, setmenuprices] = useState(false);
  const [categorys, setcategorys] = useState(1);
  const ChangeCategory = (count) => {
    setcategorys(count);
  };
  const { t } = useTranslation();
  return (
    <div>
      <section className="backdrop-opacity-15  bg-[#210A01]/95 text-white">
        <div className="container">
          <h1 className="font-extrabold lg:text-[69px] md:text[48px] text-[38px] text-center">
            {t("section1.menu")}
          </h1>
          <div className="text-center ">
            <button
              onClick={() => ChangeCategory(1)}
              style={{ background: categorys == 1 ? "#FE9C1C" : "#210A01" ,}}
              className="py-2 mt-5 lg:py-4 lg:px-12 px-6  rounded-[100px] text:[18px] lg:text-[22px] font-medium hover:bg-[#210A01] "
            >
              {t("section1.menuShow")}
            </button>
            <button
              onClick={() => ChangeCategory(2)}
              style={{ background: categorys == 2 ? "#FE9C1C" : "#210A01" }}
              className="py-2 mt-5 lg:py-4 lg:px-12 px-6  rounded-[100px] text:[18px] lg:text-[22px] font-medium hover:bg-[#210A01] "
            >
              {t("section1.meat")}
            </button>
            <button
              onClick={() => ChangeCategory(3)}
              style={{ background: categorys == 3 ? "#FE9C1C" : "#210A01" }}
              className="py-2 mt-5 lg:py-4 lg:px-12 px-6  rounded-[100px] text:[18px] lg:text-[22px] font-medium hover:bg-[#210A01] "
            >
              {t("section1.menuVegetarian")}
            </button>
            <button
              onClick={() => ChangeCategory(4)}
              style={{ background: categorys == 4 ? "#FE9C1C" : "#210A01" }}
              className="py-2 mt-5 lg:py-4 lg:px-12 px-6  rounded-[100px] text:[18px] lg:text-[22px] font-medium hover:bg-[#210A01] "
            >
              {t("section1.menuproducts")}
            </button>
            <button
              onClick={() => ChangeCategory(5)}
              style={{ background: categorys == 5 ? "#FE9C1C" : "#210A01" }}
              className="py-2 mt-5 lg:py-4 lg:px-12 px-6  rounded-[100px] text:[18px] lg:text-[22px] font-medium hover:bg-[#210A01] "
            >
              {t("section1.menuMushroom")}
            </button>
          </div>
          <div className=" ">
            <div className="flex items-center lg:justify-between justify-center flex-wrap  mt-[70px] gap-12">
              {Menu.slice(0, 3).map((menuss) => {
                return (
                  <div className="flex items-center">
                    <div
                      key={menuss.id}
                      className="w-[297px]  mt-12 lg:mt-0  bg-[#210A01] flex items-center flex-col lg:px-6 px-4 rounded-[30px] pb-8"
                    >
                      <img src={menuss.img} alt="" className="-mt-[75px]" />
                      <h1 className="md:text-[25px] text-[15px] font-medium">
                        {t(`section1.${menuss.name}`)}
                      </h1>
                      <p className="mt-5  text-center lg:text-[16px] text-[12px]">
                        {t(`section1.${menuss.text}`)}
                      </p>

                      <button
                        onClick={() => setmenuprice(menuss)}
                        className="py-2  lg:px-8 px-4 border-[#FFA229] text-[#FFA229] border-2  w-full mt-5  rounded-[100px] text:[15px] lg:text-[22px] font-medium hover:bg-[#210A01] "
                      >
                        + {t("section1.menuingridients")}
                      </button>
                      <div className="mt-5 flex items-center justify-between gap-5">
                        <div>
                          <h3 className="flex items-start text-2xl  gap-2 font-medium">
                            {menuss.price}{" "}
                            <span className="font-bold -mt-1">$</span>
                          </h3>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(menuss)}
                        disabled={cart.some((item) => item.id === menuss.id)}
                        className="py-3  lg:px-8 px-4 bg-[#FFA229] text-white   w-full mt-5  rounded-[100px] lg:text-lg text-[14px] font-medium  hover:shadow-2xl hover:bg-[#FFA959] "
                      >
                        {t("section1.orderbtn")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </section>
      <section className="text-white ">
        {menuprice && (
          <div className="relative">
            <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center max-w-full  mx-auto">
              <div
                key={menuprice.id}
                className="  bg-[#210A01] flex items-center flex-col w-[78%] lg:px-6 px-4 lg:w-[600px] rounded-[30px] pb-8 relative"
              >
                <img src={menuprice.img} alt="" />
                <button
                  onClick={() => setmenuprice(!menuprice)}
                  className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-xl absolute  top-[5%] left-[80%]"
                >
                  X
                </button>
                <h1 className="md:text-[25px] text-[22px] font-medium">
                  {t(`section1.${menuprice.name}`)}
                </h1>
                <p className="md:mt-5 mt-3  text-center w-[90%]">
                  {t(`section1.${menuprice.text}`)}
                </p>

                <div className="md:mt-5 mt-3 flex items-center justify-between gap-5">
                  <div>
                    <h3 className="flex items-start text-2xl  gap-2 font-medium">
                      {menuprice.price}{" "}
                      <span className="font-bold -mt-1">$</span>
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(menuprice)}
                  disabled={cart.some((item) => item.id === menuprice.id)}
                  className="md:py-3 py-2 lg:px-8 px-4 bg-[#FFA229] text-white   w-full md:mt-5  mt-3 rounded-[100px] text-lg font-medium  hover:shadow-2xl hover:bg-[#FFA959] "
                >
                  {t("section1.orderbtn")}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="backdrop-opacity-15  bg-[#210A01]/95 text-white pt-12 pb-7">
        <div className="container ">
          <div className="relative ">
            <img src={Sectionimg00} className="relative w-full" alt="" />
            <div className="absolute text-center sm:top-10 sm:left-[30%] top-2 left-[15%]">
              <h1 className="font-medium lg:text-[43px] md:text-[30px] sm:text-[25px] text-[20px]">
                {t("section1.imgtext")}
              </h1>
            </div>
          </div>

          <div className="  mt-6">
            <div className="flex items-center lg:justify-between justify-center flex-wrap  mt-[70px] gap-12">
              {Menu.slice(3, 6).map((menuss) => {
                return (
                  <div className="flex items-center">
                    <div
                      key={menuss.id}
                      className="w-[297px]   mt-12 lg:mt-0  bg-[#210A01] flex items-center flex-col lg:px-6 px-4 rounded-[30px] pb-8"
                    >
                      <img src={menuss.img} alt="" className="-mt-[75px]" />
                      <h1 className="md:text-[25px] text-[15px] font-medium">
                        {t(`section1.${menuss.name}`)}
                      </h1>
                      <p className="mt-5  text-center lg:text-[16px] text-[12px]">
                        {t(`section1.${menuss.text}`)}
                      </p>

                      <button
                        onClick={() => setmenuprices(menuss)}
                        className="py-2 text-center  lg:px-8 px-4 border-[#FFA229] text-[#FFA229] border-2  w-full mt-5  rounded-[100px] text:[15px] lg:text-[22px] font-medium hover:bg-[#210A01] "
                      >
                        + {t("section1.menuingridients")}
                      </button>
                      <div className="mt-5 flex items-center justify-between gap-5">
                        <div>
                          <h3 className="flex items-start text-2xl  gap-2 font-medium">
                            {menuss.price}{" "}
                            <span className="font-bold -mt-1">$</span>
                          </h3>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(menuss)}
                        disabled={cart.some((item) => item.id === menuss.id)}
                        className="py-3  lg:px-8 px-4 bg-[#FFA229] text-white   w-full mt-5  rounded-[100px] lg:text-lg text-[14px] font-medium  hover:shadow-2xl hover:bg-[#FFA959] "
                      >
                        {t("section1.orderbtn")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="text-white ">
      {menuprices && (
          <div className="relative">
            <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center max-w-full  mx-auto">
              <div
                key={menuprices.id}
                className="  bg-[#210A01] flex items-center flex-col w-[78%] lg:px-6 px-4 lg:w-[600px] rounded-[30px] pb-8 relative"
              >
                <img src={menuprices.img} alt="" />
                <button
                  onClick={() => setmenuprices(!menuprices)}
                  className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-xl absolute  top-[5%] left-[80%]"
                >
                  X
                </button>
                <h1 className="md:text-[25px] text-[22px] font-medium">
                  {t(`section1.${menuprices.name}`)}
                </h1>
                <p className="md:mt-5 mt-3  text-center w-[90%]">
                  {t(`section1.${menuprices.text}`)}
                </p>

                <div className="md:mt-5 mt-3 flex items-center justify-between gap-5">
                  <div>
                    <h3 className="flex items-start text-2xl  gap-2 font-medium">
                      {menuprices.price}{" "}
                      <span className="font-bold -mt-1">$</span>
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(menuprices)}
                  disabled={cart.some((item) => item.id === menuprices.id)}
                  className="md:py-3 py-2 lg:px-8 px-4 bg-[#FFA229] text-white   w-full md:mt-5  mt-3 rounded-[100px] text-lg font-medium  hover:shadow-2xl hover:bg-[#FFA959] "
                >
                  {t("section1.orderbtn")}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
