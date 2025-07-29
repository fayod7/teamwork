import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProducts } from "../../store/useGetProducts";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLikes } from "../../store/useLikes";
import { useCart } from "../../store/useCart";
import { MdShoppingCart } from "react-icons/md";
const Products = ({ data }) => {
  const {toggleWishlist} = useLikes()
  const { inc } = useGetProducts();
function getOriginalPrice(price, discountPercentage) {
  if (!price || !discountPercentage) return null;
  const x = 100 - discountPercentage;
  if (x === 0) return null;
  return ((price / x) * 100).toFixed(2);
}
  const {wishlist} = useLikes()
  const navigate = useNavigate();
  const {add, cart} = useCart()
  return (
    <section className="w-full py-14 bg-[#f0f0f0]">
      <div className="container">
        <h2 className="text-center font-bold text-[40px] text-[#3A3A3A] mb-7">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-6 max-[1150px]:grid-cols-3 max-[950px]:gap-4 max-[750px]:grid-cols-2 max-[450px]:grid-cols-1 overflow-hidden">
          {data?.map(
            (product) => {
               const isWishlisted = wishlist.some(i => i.id === product.id);
               const isCarted = cart.some(i => i.id === product.id);
            return (
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
                key={product.id}
                className="flex flex-col gap-3  bg-white overflow-hidden pt-5 group relative"
              >
                  
                <div className="overflow-hidden flex justify-center items-center h-48 w-full relative">
                  <img
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="duration-200 hover:cursor-pointer object-contain h-full relative group"
                    src={product.thumbnail}
                    alt=""
                  />
                    <div className="bg-red-400 size-13 rounded-full flex justify-center items-center absolute top-2 left-2 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-[800px]:opacity-100 max-[800px]:left-6">
                       <span className="text-sm text-white">
                      -{product.discountPercentage.toFixed()}%
                    </span>
                    </div> 
                        <button onClick={()=> toggleWishlist(product)} className="size-10  bg-white rounded-full shadow flex justify-center items-center border border-slate-300 absolute top-2 right-2 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-[800px]:opacity-100 max-[800px]:right-6"> 
                         {isWishlisted ? (
                                  <FaHeart className="text-red-500" />
                                ) : (
                                  <FaRegHeart className="text-gray-500" />
                                )}
                    </button>
                        <button onClick={()=> add(product)} className="size-10 bg-white rounded-full shadow flex justify-center items-center border border-slate-300 absolute bottom-2 right-2 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-[800px]:opacity-100 max-[800px]:right-6">
                           {isCarted ? (
                             <MdShoppingCart  className="size-6"/>
                            ) : (
                              <AiOutlineShoppingCart className="size-6"/>
                                )}
                    </button>
                      
                </div>
                <div className="flex flex-col justify-between mt-4 space-y-1 bg-[#F4F5F7] px-4 py-4">
                  <h2 className="text-base font-semibold text-gray-800 truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 ">{product.brand}</p>
                  <div className="flex justify-between items-center mt-2 text-[20px]">
                    <strong className="text-lg font-bold text-[#3a3a3a]">
                      ${product.price}
                    </strong>
                    <span className="text-[#B0B0B0] line-through text-base">
                        {getOriginalPrice(product.price, product.discountPercentage) &&
                          "$" + getOriginalPrice(product.price, product.discountPercentage)}
                      </span>
                  </div>
                </div>
              </div>
            )
            }
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
