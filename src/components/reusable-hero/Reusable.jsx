import Logo from "../../../public/logo-for-loading.svg";
import { NavLink } from "react-router-dom";
import Background from "../../../public/bg-for-hero.png";
import Icon from "../../../public/breadcrumb-img.svg";

const Reusable = ({ title, link }) => {
  return (
    <div
      className="w-full h-[316px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <img src={Logo} alt="logo" className="w-10 h-10 mb-2" />
        <h2 className="text-[48px] font-meduim mb-2">{title}</h2>
        <div className="flex items-center gap-0.5  mt-2">
          <NavLink to="/" className="text-[16px] font-semibold">
            Home
          </NavLink>
          <img src={Icon} />
          <span className="text-black font-light text-[16px]">{link}</span>
        </div>
      </div>
    </div>
  );
};

export default Reusable;
