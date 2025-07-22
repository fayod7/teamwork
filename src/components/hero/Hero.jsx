import React from "react";
const Hero = () => {
  return (
    <section className="w-full max-h-[812px] bg-[url(/src/assets/productsBranch/hero.png)] bg-no-repeat bg-cover bg-center">
      <div className="container flex items-center justify-end w-full min-h-[812px] max-[950px]:justify-center">
        <div className="bg-[#FFFFFFB2] w-[650px] rounded-lg py-[60px] px-[50px] flex max-[500px]:mb-[200px] flex-col gap-4">
          <h2 className="text-[#333333] font-semibold">New Arrival</h2>
          <h1 className="text-[#B88E2F] font-bold text-[50px] max-[500px]:text-[30px]">
            Discover Our New Collection
          </h1>
          <p className="max-[500px]:text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div>
            <button className="text-white border-2 border-[#B88E2F] bg-[#B88E2F] py-3 px-16  duration-200 hover:cursor-pointer hover:bg-transparent hover:text-[#B88E2F]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
