import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, ArrowUp } from "lucide-react";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="bg-[#170A00] text-white   backdrop-blur-xl pt-[70px] pb-12 relative" >
        <div className="container">
          <div className="md:flex items-start justify-around ">
            <Link
              className="text-[34px]  font-extrabold text-[#FF6432] "
              to={"/"}
            >
              pizzashop
            </Link>
            <div className="mt-5 md:mt-0">
              <div className="lg:flex lg:items-start lg:justify-between gap-10 grid grid-cols-2">
                <div>
                  <ul className="flex flex-col gap-5">
                    <Link className="text-[17px] text-white" to={"/"}>
                      {t(`nav.home`)}
                    </Link>
                    <div className="flex flex-col gap-3">
                      <Link className="text-[17px] text-[#515151]" to={"/"}>
                        {t(`header.order`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/aboutus"}
                      >
                        {t(`nav.aboutus`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/events"}
                      >
                        {t(`nav.events`)}
                      </Link>
                      <Link className="text-[17px] text-[#515151]" to={"/menu"}>
                        {t(`nav.menu`)}
                      </Link>
                    </div>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-5">
                    <Link className="text-[17px] text-white" to={"/"}>
                      {t(`nav.events`)}
                    </Link>
                    <div className="flex flex-col gap-3">
                      <Link className="text-[17px] text-[#515151]" to={"/"}>
                        {t(`footer.events1`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/aboutus"}
                      >
                        {t(`footer.events2`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/events"}
                      >
                        {t(`footer.events3`)}
                      </Link>
                    </div>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-5">
                    <Link className="text-[17px] text-white" to={"/"}>
                      {t(`nav.menu`)}
                    </Link>
                    <div className="flex flex-col gap-3">
                      <Link className="text-[17px] text-[#515151]" to={"/"}>
                        {t(`footer.menu1`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/aboutus"}
                      >
                        {t(`footer.menu2`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/events"}
                      >
                        {t(`footer.menu3`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/events"}
                      >
                        {t(`footer.menu4`)}
                      </Link>
                    </div>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-5">
                    <Link className="text-[17px] text-white" to={"/"}>
                      {t(`nav.aboutus`)}
                    </Link>
                    <div className="flex flex-col gap-3">
                      <Link className="text-[17px] text-[#515151]" to={"/"}>
                        {t(`footer.aboutus1`)}
                      </Link>
                      <Link
                        className="text-[17px] text-[#515151]"
                        to={"/aboutus"}
                      >
                        {t(`footer.aboutus2`)}
                      </Link>
                    </div>
                  </ul>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-center"
                >
                  <div className="relative z-[100] ">
                    <ArrowUp
                      className=" text-white  bg-red-950/95 px-3 py-3 top-10 right-[10%] lg:static fixed rounded-2xl "
                      size={45}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-[34px]  font-extrabold text-[#FF6432] ">
              +............
            </h2>
            <div className="flex items-center gap-3 text-[#FF6432]">
              <Twitter />
              <Instagram />
              <Facebook />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
