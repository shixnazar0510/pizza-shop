import React from "react";
import IMg01 from "../../assets/section0001.png";
import IMg02 from "../../assets/section0002.png";
import IMg03 from "../../assets/section0003.png";
import IMg04 from "../../assets/section0004.png";
import IMg05 from "../../assets/section0005.png";
import IMg06 from "../../assets/section0006.png";
import { useTranslation } from "react-i18next";
const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="backdrop-opacity-15  bg-[#210A01]/95 text-white pb-6">
        <div className="container">
          <div className=" mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between grid  grid-cols-1 md:gap-5 ">
              <div className="text-white  w-full lg:hidden flex flex-col  md:col-span-2 ">
                <h1 className="font-extrabold lg:text-[69px] text-center text-[45px]">
                  {t("nav.events")}
                </h1>
                <p className="text-[19px] text-[#A3A3A3] text-center">
                  {t("section3.text")}
                </p>
              </div>
              <div className="flex items-center justify-center flex-col md:flex-row gap-5 w-full mt-5 md:mt-0">
                <div className="relative">
                  <img src={IMg01} alt="" />
                  <div className="">
                    <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                      {t("section3.imgtext1")}
                    </h3>
                    <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                      {t("section3.btnmore")}
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img src={IMg02} alt="" />
                  <div className="">
                    <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                      {t("section3.imgtext2")}
                    </h3>
                    <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                      {t("section3.btnmore")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-white max-w-[425px] w-full lg:flex hidden flex-col items-end ">
                <h1 className="font-extrabold lg:text-[69px] text-[45px]">
                  {t("nav.events")}
                </h1>
                <p className="text-[19px] text-[#A3A3A3] text-right">
                  {" "}
                  {t("section3.text")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="lg:flex lg:items-center lg:justify-between  grid-cols-1 md:gap-5 ">
                <div className="md:flex items-center justify-center flex-col md:flex-row gap-5 w-full mt-5 ">
                  <div className="relative">
                    <img src={IMg03} alt="" />
                    <div className="">
                      <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                        {t("section3.imgtext3")}
                      </h3>
                      <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                        {t("section3.btnmore")}
                      </button>
                    </div>
                  </div>
                  <div className="relative mt-5 md:mt-0">
                    <img src={IMg03} alt="" />
                    <div className="">
                      <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                        {t("section3.imgtext4")}
                      </h3>
                      <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                        {t("section3.btnmore")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="lg:flex lg:items-center lg:justify-between   md:gap-5 ">
              <div className="flex items-center justify-center flex-col md:flex-row gap-5 w-full mt-5 md:mt-0">
                <div className="relative mt-5">
                  <img src={IMg04} alt="" />
                  <div className="">
                    <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                      {t("section3.imgtext5")}
                    </h3>
                    <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                      {t("section3.btnmore")}
                    </button>
                  </div>
                </div>
                <div className="relative mt-5">
                  <img src={IMg05} alt="" />
                  <div className="">
                    <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                      {t("section3.imgtext6")}
                    </h3>
                    <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                      {t("section3.btnmore")}
                    </button>
                  </div>
                </div>{" "}
                <div className="relative mt-5">
                  <img src={IMg06} alt="" />
                  <div className="">
                    <h3 className="absolute top-[10%] left-[6%] font-medium lg:text-[22px] text-[18px] w-[150px]">
                      {t("section3.imgtext7")}
                    </h3>
                    <button className=" absolute bottom-[10%] py-[10px] px-[70px]  left-[6%]   bg-[#FE9C1C] rounded-[100px] text:[15px]  font-medium">
                      {t("section3.btnmore")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
