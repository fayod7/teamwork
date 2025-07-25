import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "../../../public/images/delete.svg";
import { useCart } from "../../store/useCart";
import { Toaster, toast } from "sonner";

const CartExist = () => {
  const { cart, remove } = useCart();
  window.scrollTo(0, 0);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Shipping: $100 if subtotal > 150, else $0
  const shipping = subtotal > 150 ? 100 : 0;
  // Total = subtotal + shipping
  const total = subtotal + shipping;
  // Format as currency
  const formatCurrency = (num) =>
    "Rs. " + num.toLocaleString("en-US", { minimumFractionDigits: 2 });

  return (
    <div>
      <div className="container flex gap-8 mt-16 mb-14 max-[900px]:flex-col max-[900px]:gap-6">
        {/* Cart Table */}
        <div className="flex-1 bg-white p-4 max-[600px]:p-2 overflow-x-auto">
          {/* Table Header */}
          <div className="hidden md:flex justify-between px-[146px] items-center bg-[#F9F1E7]  py-4 font-semibold text-gray-700 text-base">
            <div className="flex gap-24 min-w-[300px]">
              <span>Product</span>
              <span>Price</span>
            </div>
            <div className="flex gap-10 min-w-[200px]">
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
          </div>
          {/* Table Row */}
          {cart?.map((items, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-0 mt-8 md:mt-10 border-b pb-6 md:pb-8 max-[600px]:bg-[#F9F1E7] max-[600px]:rounded-[8px] max-[600px]:p-4 max-[600px]:gap-2 max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:items-center"
            >
              <NavLink to={`/product/${items?.id}`} className="flex-shrink-0">
                <img
                  className="w-24 h-24 rounded-[10px] object-cover bg-[#EFE6D1] p-2 max-[600px]:mx-auto"
                  src={items?.thumbnail}
                  alt="demo"
                />
              </NavLink>
              <div className="flex gap-[69px] flex-col md:flex-row md:items-center flex-1 ml-0 md:ml-8 max-[600px]:gap-2 max-[600px]:mt-2 max-[768px]:gap-2 max-[768px]:mt-2">
                <div className="flex gap-[69px]">
                  <p className="font-semibold text-lg w-[110px] truncate text-gray-800 max-[600px]:w-full max-[600px]:text-center">
                    {items?.title}
                  </p>
                  <p className="text-gray-500 text-base md:hidden max-[600px]:text-center">
                    Rs. {items?.price}
                  </p>
                </div>
                <div className="hidden md:block">
                  <p className="text-gray-500 text-base">Rs. {items?.price}</p>
                </div>
                <div className="flex items-center gap-[70px] max-[600px]:justify-center max-[600px]:gap-4 max-[768px]:gap-4">
                  <div className="border border-gray-300 px-4 rounded-[5px] py-2 bg-white max-[600px]:mx-auto">
                    <p className="text-black">{items?.quantity}</p>
                  </div>
                  <p className="text-gray-800 font-semibold max-[600px]:text-center">
                    {formatCurrency(items?.price * items?.quantity)}
                  </p>
                </div>
              </div>
              <button className="ml-0 md:ml-8 mt-4 md:mt-0 flex-shrink-0 max-[600px]:mx-auto max-[768px]:mx-auto">
                <img
                  onClick={() => {
                    remove(items);
                    toast.error("Product removed from cart");
                  }}
                  className="w-7 h-7 cursor-pointer grayscale hover:grayscale-0 transition"
                  src={Delete}
                  alt="delete"
                />
              </button>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="max-w-[393px] h-[390px] bg-[#F9F1E7] flex flex-col items-center mx-auto md:mx-0  md:mt-0 md:sticky top-[150px] md:top-8">
          <h2 className="text-[32px] font-semibold text-center pt-[15px] pb-[61px]">
            Cart Totals
          </h2>
          <div className="flex justify-between w-full px-[75px] gap-[62px]">
            <span className="font-medium text-[16px]">Subtotal</span>
            <span className="text-gray-500">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between w-full px-[75px] gap-[62px] pt-2">
            <span className="font-medium text-[16px]">Shipping</span>
            <span className="text-gray-500">
              {shipping > 0 ? formatCurrency(shipping) : "Free"}
            </span>
          </div>
          <div className="flex px-[75px] gap-[58px] pt-[31px]">
            <span className="font-medium text-[16px]">Total</span>
            <span className="text-[#B88E2F] text-[20px]">
              {formatCurrency(total)}
            </span>
          </div>
          <button className="w-4/5 my-8 py-3 cursor-pointer rounded-lg border border-[#B88E2F] text-[#B88E2F] text-lg font-semibold hover:bg-[#B88E2F] hover:text-white transition">
            Check Out
          </button>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default CartExist;
