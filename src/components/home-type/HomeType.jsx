import React from "react";
import dining from "./1.svg";
import bedroom from "./bedroom.svg";
import living from "./living room.svg";

const HomeType = () => {
  return (
    <div className="bg-[#fff] mt-[55px] mb-[57px]">
      <div className="container flex flex-col items-center]">
        <h1 className="text-center font-bold text-[40px] text-[#333333] max-[540px]:text-[35px]">
          Browse The Range
        </h1>
        <p className="text-center text-[20px] text-light pb-[20px]  text-[#666] max-[540px]:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center gap-[50px] mt-[20px] justify-between max-[540px]:flex-col">
          <div className="flex flex-col items-center gap-8">
            <img src={dining} alt="dining room" />
            <b className="text-[20px] text-[#3a3a3a]">Dining</b>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img src={living} alt="living room" />
            <b className="text-[20px] text-[#3a3a3a]">Living</b>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img src={bedroom} alt="bedroom" />
            <b className="text-[20px] text-[#3a3a3a]">Bedroom</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeType;
