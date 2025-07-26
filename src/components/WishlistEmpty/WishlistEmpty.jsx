import React from 'react'

const WishlistEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] py-12">
      <div className="text-7xl mb-4">❤️</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-2">
        Your wishlist is empty
      </h1>
      <p className="text-gray-500 text-base">
        Looks like you haven&apos;t added anything yet.
      </p>
    </div>
  )
}

export default React.memo(WishlistEmpty)