import React from "react";
import { useTranslation } from "react-i18next";
import Pizzas from '../../assets/section0000.png'
import Pizzas0 from '../../assets/section00001.png'
const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="text-white py-4 backdrop-opacity-15  bg-[#210A01]/95">
        <div className="container">
          <div className="lg:flex items-center justify-between">
            <div className="max-w-[450px] w-full mx-auto flex items-center justify-center flex-col">
              <h1 className="text-[45px]  lg:text-[69px] font-extrabold text-center lg:text-start">{t("nav.aboutus")}</h1>
              <p className="text-[19px] mt-4 mb-5 max-w-[460px] w-full text-[#A3A3A3] text-center lg:text-start">{t('Aboutus.textp1')}</p>
              <img src={Pizzas0} alt="" />
              <p className="text-[19px] mt-4 mb-5 max-w-[460px] w-full text-[#A3A3A3] text-center lg:text-start">{t('Aboutus.textp2')}</p>
            </div>
            <div>
                <img src={Pizzas} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
