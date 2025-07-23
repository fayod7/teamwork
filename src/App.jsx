import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Layout from "./pages/layout/Layout";
import DetailProduct from "./pages/detail-product/DetailProduct";
import { useState, useEffect } from "react";
import LoadingLogo from "../public/logo-for-loading.svg";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showRotate, setShowRotate] = useState(false);
  const [showName, setShowName] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowRotate(true), 700); // logo fade-in, then rotate
    const timer2 = setTimeout(() => setShowName(true), 1200); // then name appears
    const timer3 = setTimeout(() => setHideLoader(true), 2000); // loader slides down
    const timer4 = setTimeout(() => setLoading(false), 2400); // remove loader
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (loading) {
    return (
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
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
