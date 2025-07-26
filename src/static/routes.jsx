import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const routes = [
  {
    id: 8,
    src: <FaRegUser className="size-5" />,
    to: "/user",
  },
  {
    id: 7,
    src: <MdOutlineSearch className="size-6" />,
    to: "/search",
  },

  {
    id: 6,
    src: <FaRegHeart className="size-5" />,
    to: "/likes",
  },
  {
    id: 5,
    src: <AiOutlineShoppingCart className="size-6" />,
    to: "/cart",
  },
];
