import React from 'react'
import { useLikes } from '../../store/useLikes';
import WishlistExist from '../../components/WishlistExist/WishlistExist';
import WishlistEmpty from '../../components/WishlistEmpty/WishlistEmpty';
const Likes = () => {
  const {wishlist} = useLikes()
      window.scrollTo(0, 0);
  return (
    <>
{
wishlist.length > 0 ? <WishlistExist/> : <WishlistEmpty/>
}
    </>
  )
}

export default Likes