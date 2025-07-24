import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProducts } from "../../store/useGetProducts";
import { FaShareAlt, FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
const Products = ({ data }) => {
  const [like, setLike] = useState(false);
  const { inc } = useGetProducts();
  const toggleLike = () => {
    setLike((p) => !p);
  };
function getOriginalPrice(price, discountPercentage) {
  if (!price || !discountPercentage) return null;
  const x = 100 - discountPercentage;
  if (x === 0) return null;
  return ((price / x) * 100).toFixed(2);
}
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
            ({ id, thumbnail, title, price, discountPercentage, brand }) => (
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
                className="flex flex-col gap-3  bg-white overflow-hidden pt-5 group relative"
              >
                <div
                  onClick={() => navigate(`/product/${id}`)}
                  className="absolute inset-0 bg-[#333]/50 duration-150 opacity-0 group-hover:opacity-100 flex flex-col z-20 items-center justify-center gap-5"
                >
                  <div className="flex items-center justify-center">
                    <button className="text-[#B88E2F] bg-white cursor-pointer py-3 px-14 duration-200 hover:bg-[#B88E2F] hover:text-white">
                      Add to cart
                    </button>
                  </div>
                  <div className="flex justify-betweeen items-center gap-5">
                    <button className="flex justify-center items-center cursor-pointer gap-0.5 text-white">
                      <FaShareAlt /> <span>Share</span>
                    </button>
                    <button className="flex justify-center items-center cursor-pointer gap-0.5 text-white">
                      <MdCompareArrows />
                      <span>Compare</span>
                    </button>
                    <button className="flex cursor-pointer justify-center items-center gap-0.5 text-white">
                      <FaRegHeart /> <span>Like</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-hidden flex justify-center items-center h-48 w-full relative">
                  <img
                    onClick={() => navigate(`/product/${id}`)}
                    className="duration-200 hover:cursor-pointer object-contain h-full relative group"
                    src={thumbnail}
                    alt=""
                  />
                    <div className="bg-red-400 size-13 rounded-full opacity-100 group-hover:opacity-0 absolute top-1 right-3 flex justify-center items-center">
                       <span className="text-sm text-white">
                      -{discountPercentage.toFixed()}%
                    </span>
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-4 space-y-1 bg-[#F4F5F7] px-4 py-4">
                  <h2 className="text-base font-semibold text-gray-800 truncate">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-500 ">{brand}</p>
                  <div className="flex justify-between items-center mt-2 text-[20px]">
                    <strong className="text-lg font-bold text-[#3a3a3a]">
                      ${price}
                    </strong>
                    <span className="text-[#B0B0B0] line-through text-base">
                        {getOriginalPrice(price, discountPercentage) &&
                          "$" + getOriginalPrice(price, discountPercentage)}
                      </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <button
          onClick={inc}
          className="text-[#B88E2F] border border-[#B88E2F] py-3 px-16 block mx-auto mt-5 bg-transparent duration-200 hover:cursor-pointer hover:bg-[#B88E2F] hover:text-white"
        >
          See more
        </button>
      </div>
    </section>
  );
};

export default React.memo(Products);
