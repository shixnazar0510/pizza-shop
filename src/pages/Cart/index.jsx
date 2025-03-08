import React, { useState } from "react";
import { TargetContext } from "../../App";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Index = () => {
  const { cart, removeCart } = TargetContext();
  const [menucount, setmenucount] = useState(1);
  const [categorys, setcategorys] = useState(1);
  const ChangeCategory = (count,id) => {
    setcategorys(count);
  };
  const { t } = useTranslation();
  return (
    <div>
      <section className="backdrop-opacity-15 pt-[55px] pb-[100px]  bg-[#210A01]/95 text-white">
        {cart.length ? (
          <div className="container  ">
            <div className="    ">
              <div className=" lg:flex  lg:gap-12 lg:flex-col  grid sm:grid-cols-2  grid-cols-1  gap-5 rounded-xl  px-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#210A01]  flex items-center lg:items-center lg:justify-between p-3 lg:flex-row px-5 justify-center flex-col gap-5 lg:rounded-md rounded-xl"
                  >
                    <img src={item.img} alt="" />
                    <h2 className="md:text-[25px] text-[20px] font-medium">
                      {t(`section1.${item.name}`)}
                    </h2>
                    <div>
                      <h3 className="flex items-start text-2xl  gap-2 font-medium">
                        {item.price} <span className="font-bold -mt-1">$</span>
                      </h3>
                    </div>
                    <div className="flex items-center lg:flex-col  flex-col-reverse gap-3 ">
                      <div className="flex items-center gap-3 ">
                        <button
                          onClick={() => ChangeCategory(1 ,item.id)}
                          style={{
                            background: categorys == 1 ? "#FE9C1C" : "#210A01",color: categorys == 1 ? "white" : "#A3A3A3"
                          }}
                          className=" w-[35px] h-[35px] border-2 border-[#A3A3A3]  rounded-full"
                        >
                          22
                        </button>
                        <button
                          onClick={() => ChangeCategory(2)}
                          style={{
                            background: categorys == 2 ? "#FE9C1C" : "#210A01",color: categorys == 2 ? "white" : "#A3A3A3"
                          }}
                          className=" w-[35px] h-[35px] border-2 border-[#A3A3A3]  rounded-full "
                        >
                          28
                        </button>
                        <button
                          onClick={() => ChangeCategory(3)}
                          style={{
                            background: categorys == 3 ? "#FE9C1C" : "#210A01",color: categorys == 3 ? "white" : "#A3A3A3"
                          }}
                          className=" w-[35px] h-[35px] border-2 border-[#A3A3A3]  rounded-full"
                        >
                          33
                        </button>
                      </div>
                      <h2 className="md:text-[25px] text-[15px] font-medium text-white">
                        {t("cart.sizecart")}:
                      </h2>
                    </div>
                    <div className="flex items-center lg:flex-col  flex-col-reverse gap-3 ">
                      <div className="flex items-center gap-3">
                        <button
                          className=" w-[25px] flex items-center justify-center text-[10px] lg:text-[20px] h-[25px] border-2 border-[#A3A3A3] text-[#A3A3A3] rounded-full"
                          onClick={(e) => setmenucount(menucount - 1)}
                          disabled={menucount === 1}
                        >
                          -
                        </button>
                        <h2>{menucount}</h2>
                        <button
                          className="w-[25px] flex items-center justify-center text-[20px] h-[25px] border-2 border-[#A3A3A3] rounded-full bg-[#FFA229]"
                          onClick={() => setmenucount(menucount + 1)}
                          disabled={menucount === 10}
                        >
                          +
                        </button>
                      </div>
                      <h2 className="md:text-[25px] text-[15px] font-medium text-white">
                        {t("cart.numbercart")}:
                      </h2>
                    </div>
                    <div>
                      <button
                        onClick={() => removeCart(item.id)}
                        className="py-3  lg:px-8 px-4 bg-[#FFA229] text-white   w-full mt-5  rounded-[100px] lg:text-lg text-[14px] font-medium  hover:shadow-2xl hover:bg-[#FFA959] "
                      >
                        {t("cart.removecart")}
                      </button>
                    </div>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="py-3  lg:px-8 px-4 bg-[#FFA229] text-white   w-[30%] mt-5  rounded-[100px] lg:text-lg text-[14px] font-medium  hover:shadow-2xl hover:bg-[#FFA959] ">
                {t("section1.orderbtn")}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Link to={"/"}>
              <button className="py-3  lg:px-8 px-4 bg-[#FFA229] text-white  mb-12  mt-10  rounded-[100px] lg:text-lg text-[14px] font-medium  hover:shadow-2xl hover:bg-[#FFA959] ">
                {t("cart.homepage")}
              </button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
