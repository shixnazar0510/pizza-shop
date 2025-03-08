import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div>
      <header className="backdrop-opacity-15  bg-[#210A01]/95 text-white">
        <div className="container flex flex-col items-center justify-center pt-12 pb-12">
          <div className="flex flex-col gap-3 max-w-[500px] w-full justify-center   bg-[#210A01] p-5 rounded-md">
            <h2 className="text-[30px] text-white text-center font-medium">
              Login
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="bg-[#210A01] placeholder:text-white border-2  outline-none border-[#A3A3A3] px-2 py-1 rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#210A01] placeholder:text-white border-2  outline-none border-[#A3A3A3] px-2 py-1 rounded-xl"
            />
            <div className="flex items-center justify-center">
              <button className=" rounded-xl  p-1 hover:bg-[#FFA959] bg-[#FE9C1C] w-full ">
                Log in
              </button>
            </div>
            <div className="flex items-center justify-between gap-5">
              <p>Profiligniz yo'qmi: </p>
              <Link to={"/register"} className="text-[18px]  rounded-xl  p-1 hover:bg-[#FFA959]/95 bg-[#FE9C1C] px-10"> 
                 Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;
