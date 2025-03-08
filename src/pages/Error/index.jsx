import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="coontainer backdrop-opacity-15 pt-[55px] pb-[100px]  bg-[#210A01]/95 text-white flex flex-col gap-5 items-center justify-center">
        <h1 className="text-[45px] font-semibold">{t("error.text")}</h1>

        <Link to={"/"}>
          <button className="py-3  lg:px-8 px-4 bg-[#FFA229] text-white  mb-12  mt-10  rounded-[100px] lg:text-lg text-[14px] font-medium  hover:shadow-2xl hover:bg-[#FFA959] ">
            {t("cart.homepage")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
