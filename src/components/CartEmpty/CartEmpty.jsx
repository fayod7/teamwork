import React from "react";

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] py-12">
      {/* You can replace the emoji with an SVG or image if you add one later */}
      <div className="text-7xl mb-4">🛒</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-2">
        Your cart is empty
      </h1>
      <p className="text-gray-500 text-base">
        Looks like you haven&apos;t added anything yet.
      </p>
    </div>
  );
};

export default CartEmpty;
