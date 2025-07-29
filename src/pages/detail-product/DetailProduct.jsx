import React, { useLayoutEffect, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import stars from "./Group 88.svg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import LoadingLogo from "../../../public/logo-for-loading.svg";
import { Toaster } from "react-hot-toast";

const DetailProduct = () => {
  const [isloading, setIsLoading] = useState(true);
  const [showRotate, setShowRotate] = useState(false);
  const [showName, setShowName] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [count, setCount] = useState(0); // for images
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("blue");
  const [quantity, setQuantity] = useState(0); 


  useEffect(() => {
    const timer1 = setTimeout(() => setShowRotate(true), 700); // logo fade-in, then rotate
    const timer2 = setTimeout(() => setShowName(true), 1200); // then name appears
    const timer3 = setTimeout(() => setHideLoader(true), 2000); // loader slides down
    const timer4 = setTimeout(() => setIsLoading(false), 2400); // remove loader
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>somthing went wrong</p>;
  }

  return loading ? (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-white z-[9999] transition-transform duration-500 ${
        hideLoader ? "animate-slide-down" : ""
      }`}
    >
      <div className="flex items-center">
        <img
          src={LoadingLogo}
          alt="Logo"
          className={`w-[70px] h-[52px] object-contain mb-2 transition-all duration-700 ${
            showRotate ? "animate-rotate" : "animate-fade-in"
          }`}
          style={{ filter: "drop-shadow(0 4px 24px #B88E2F33)" }}
        />
        <span
          className={`ml-4 text-4xl font-bold text-[#000] tracking-wide transition-all duration-700 ${
            showName ? "animate-name-in" : "opacity-0 translate-x-10"
          }`}
        >
          Funiro
        </span>
      </div>
      <style>{`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(1.3); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes rotate {
            0% { transform: scale(1) rotate(0deg); }
            100% { transform: scale(1) rotate(360deg); }
          }
          .animate-rotate {
            animation: rotate 1s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes name-in {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-name-in {
            animation: name-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes slide-down {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-slide-down {
            animation: slide-down 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
    </div>
  ) : (
    <>
      {/* Breadcrumb */}
      <div className="w-full" style={{ background: "#F9F1E7" }}>
        <div className="container flex items-center py-[32px] px-4 gap-3">
          <NavLink
            to="/"
            className="text-[16px] text-[#9F9F9F] hover:text-black"
          >
            Home
          </NavLink>
          <span className="text-black">&#8250;</span>
          <span className="text-[16px]">{data?.title}</span>
        </div>
      </div>
      <div className="container mt-[32px]">
        <div className="flex gap-20 items-start max-[1160px]:flex-col max-[1160px]:gap-10 max-[800px]:gap-6 max-[800px]:px-2">
          {/* Images */}
          <div className="flex gap-10 items-start max-[1160px]:flex-row max-[1160px]:justify-center max-[1160px]:items-center max-[1160px]:w-full max-[600px]:flex-col max-[600px]:gap-4">
            <div className="flex flex-col gap-8 max-[1160px]:hidden ">
              {data?.images?.map((item, inx) => (
                <img
                  className="bg-[#F9F1E7] rounded-lg cursor-pointer w-20 h-20 object-cover max-[400px]:w-14 max-[400px]:h-14"
                  width={80}
                  src={item}
                  key={inx}
                  alt=""
                  onClick={() => setCount(inx)}
                />
              ))}
            </div>
            <img
              className="bg-[#F9F1E7] rounded-lg p-8 max-w-full max-h-[350px] max-[600px]:grid-cols-2 max-[600px]:gap-4 object-contain max-[600px]:p-2 max-[400px]:h-[180px]"
              src={data?.images[count]}
              width={500}
              alt=""
            />
            <div className="max-[1160px]:flex min-[1160px]:hidden min-[600px]:flex gap-8  hidden max-[600px]:gap-4 max-[860px]:flex-col max-[860px]:items-center max-[860px]:justify-center max-[860px]:w-full max-[860px]:h-full ">
              {data?.images?.map((item, inx) => (
                <img
                  className="bg-[#F9F1E7] rounded-lg cursor-pointer w-20 h-20 object-cover max-[400px]:w-14 max-[400px]:h-14"
                  width={80}
                  src={item}
                  key={inx}
                  alt=""
                  onClick={() => setCount(inx)}
                />
              ))}
            </div>
          </div>
          {/* Product Info */}
          <div className="w-sm min-w-[260px] max-w-[400px] max-[1160px]:w-full max-[1160px]:max-w-full max-[600px]:px-2">
            <h2 className="text-4xl max-[600px]:text-2xl">{data?.title}</h2>
            <b className="text-[24px] text-[#9F9F9F] font-medium">
              Rs. {data?.price}
            </b>
            <img
              src={stars}
              alt=""
              className="max-w-[120px] max-[400px]:max-w-[80px] mt-[15px]"
            />
            <p className="max-[600px]:text-sm mt-[18px]">{data?.description}</p>
            <p className="text-[#9F9F9F] mt-2 text-[14px]">Size</p>
            <div className="flex gap-4 max-[400px]:gap-2">
              <div
                className={`text-xs rounded-lg p-3 cursor-pointer mt-1 ${
                  size === "L" ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
                }`}
                onClick={() => setSize("L")}
              >
                L
              </div>
              <div
                className={`text-xs rounded-lg p-3 cursor-pointer ${
                  size === "XL" ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
                }`}
                onClick={() => setSize("XL")}
              >
                XL
              </div>
              <div
                className={`text-xs rounded-lg p-3 cursor-pointer ${
                  size === "XS" ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
                }`}
                onClick={() => setSize("XS")}
              >
                XS
              </div>
            </div>
            <p className="text-[#9F9F9F] text-[14px] mt-[18px]">Color</p>
            <div className="flex gap-4 mt-[12px] max-[400px]:gap-2">
              <div
                className={`bg-[#816DFA] cursor-pointer rounded-2xl p-4 border-2 ${
                  color === "blue" ? "border-black" : "border-transparent"
                }`}
                onClick={() => setColor("blue")}
              ></div>
              <div
                className={`bg-[#000000] cursor-pointer rounded-2xl p-4 border-2 ${
                  color === "black" ? "border-[#B88E2F]" : "border-transparent"
                }`}
                onClick={() => setColor("black")}
              ></div>
              <div
                className={`bg-[#B88E2F] cursor-pointer rounded-2xl p-4 border-2 ${
                  color === "yellow" ? "border-black" : "border-transparent"
                }`}
                onClick={() => setColor("yellow")}
              ></div>
            </div>
            <div className="flex gap-4 mt-4 max-[600px]:flex-col max-[600px]:gap-2">
              <div className="flex items-center border text-nowrap rounded-md border-gray-500 px-1 cursor-pointer max-[600px]:w-full gap-4">
                <button
                  className="text-xl py-2 px-[20px]"
                  onClick={() => setQuantity(q => (q > 0 ? q - 1 : 0))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="text-xl py-2 px-[20px]"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>

              <button className="border text-nowrap py-3 rounded-md border-gray-500 px-8 cursor-pointer max-[600px]:w-full">
                Add to card
              </button>
              <button className="border text-nowrap py-3 rounded-md border-gray-500 px-8 cursor-pointer max-[600px]:w-full">
                + Compare
              </button>
            </div>
            <hr className="bg-gray-500 text-gray-500 my-4" />
            <div className="max-[600px]:text-sm w-[350px]">
              <p className="flex text-gray-500 items-center gap-2">SKU :      <span> {data?.sku}</span></p>
              <p className="flex text-gray-500 items-center gap-2">Category : <span> {data?.category}</span></p>
              <p className="flex text-gray-500 items-center gap-2">Tags :     <span> {data?.tags}</span></p>
              <p className="flex text-gray-500 items-center flex-wrap gap-2">
                Share : <span className="flex items-center gap-2"><FaFacebook /> <FaLinkedin /> <FaTwitter /></span>
              </p>
            </div>
          </div>
        </div>
        {/* Tabs and Comments */}
        <div className="flex flex-col border-1 border-[#0000] border-t-gray-500 py-[30px] mt-[50px] items-center gap-[30px] max-[600px]:mt-[30px] max-[600px]:px-2">
          <div className="flex gap-12 max-[600px]:gap-4 max-[400px]:flex-col max-[400px]:items-center">
            <h2 className="text-[20px] font-medium max-[600px]:text-base">
              Description
            </h2>
            <h2 className="text-[20px] font-medium text-gray-400 max-[600px]:text-base">
              Additional Information
            </h2>
            <h2 className="text-[20px] font-medium text-gray-400 max-[600px]:text-base">
              reviews {data?.reviews.length}
            </h2>
          </div>
          <div className="w-full max-w-2xl max-[600px]:text-sm">
            <p className="text-gray-400">{data?.description}</p>
            <h3 className="text-lg text-gray-500 font-bold mt-4">Comments:</h3>
            <div className="flex flex-wrap justify-between gap-4">
              {data?.reviews?.map((review, i) => (
                <p key={i} className="text-gray-400">
                  {review.reviewerName}: <br />
                  <span className="text-gray-600">{review.comment}</span>
                </p>
              ))}
            </div>
          </div>

        </div>
        <div className="flex justify-center items-center gap-4 max-[970px]:flex-col">
          {
              data?.images?.map((item, inx) => (
                <img className="bg-[#F9F1E7]  rounded-lg" width={300} src={item} key={inx} alt="" />
              ))
            }
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default DetailProduct;
