import React from "react";
import header from "../../assets/header0.png";
import header00 from "../../assets/header00.png";

import { useTranslation } from "react-i18next";
const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="backdrop-opacity-15  bg-[#210A01]/95 text-white relative z-40" id="Header">
        <div className="container lg:flex flex items-center justify-between flex-col-reverse lg:flex-row flex-grow ">
          <div className="max-w-[550px] w-full">
            <h1 className="font-extrabold lg:text-[69px] text-[48px] lg:leading-[75px] leading-[45px]">
              {t("header.title")}
            </h1>
            <p className="lg:mt-7 md:mt-3 mt-2 max-w-[411px] w-full lg:text-[20px] mb-6 text-[14px]">
              {t("header.text")}
            </p>
            <div className="flex flex-col items-start">
              <span className="text-[19px] mb-3 text-[#A3A3A3]">
                {t("header.imgtext")}
              </span>
              <img src={header00} alt="" />
            </div>
            <div className="lg:mt-[70px] md:mt-[45px] mt-[30px] flex items-center gap-3">
              <button className=" py-2 lg:py-4 lg:px-12 px-6 bg-[#FE9C1C] rounded-[100px] text:[18px] lg:text-[22px] font-medium hover:bg-inherit hover:border-2 hover:border-[#FE9C1C]">
                {t('header.order')}
              </button>
              <button className=" py-2 lg:py-4 lg:px-12 px-6 border-2  border-[#FE9C1C] rounded-[100px] text:[18px] lg:text-[22px] font-medium">
                {t('header.pizmenu')}
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={header} alt="" className="" />

          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;
