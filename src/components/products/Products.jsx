import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Products = ({ data }) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike((p) => !p);
  };
  console.log(data.products);
  const navigate = useNavigate();
  return (
    <section className="w-full py-14 bg-[#f0f0f0]">
      <div className="container">
        <h2 className="text-center font-bold text-[40px] text-[#3A3A3A] mb-7">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-6  max-[1150px]:grid-cols-3 max-[950px]:gap-4 max-[750px]:grid-cols-2 max-[450px]:grid-cols-1">
          {data?.products?.map(
            ({ id, thumbnail, title, price, rating, description }) => (
              <div
                style={{
                  boxShadow: `rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
              rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
              rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
              rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
              rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
              rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
              rgba(42, 51, 70, 0.03) 0px 24px 24px -8px`,
                }}
                key={id}
                className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden py-5 px-4"
              >
                <div className="overflow-hidden flex justify-center items-center h-48 w-full relative">
                  <div
                    className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer shadow-md"
                    onClick={toggleLike}
                  >
                    {like ? (
                      <AiFillHeart className="text-[#8967f0] text-xl" />
                    ) : (
                      <AiOutlineHeart className="text-gray-600 text-xl" />
                    )}
                  </div>
                  <img
                    onClick={() => navigate(`/product/${id}`)}
                    className="duration-200 hover:cursor-pointer hover:scale-90 object-contain h-full"
                    src={thumbnail}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {description}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-[20px]">
                    <strong className="text-[#7F4DFF] font-bold ">
                      ${price}
                    </strong>
                    <span className="text-yellow-500 text-sm">⭐ {rating}</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <button className="text-[#B88E2F] border border-[#B88E2F] py-3 px-16 block mx-auto mt-5 bg-transparent duration-200 hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white">
          See more
        </button>
      </div>
    </section>
  );
};

export default React.memo(Products);
