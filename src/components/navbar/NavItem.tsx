import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  name: string;
  url: string;
  icon: any;
  isExpanded: boolean;
}

function NavItem({ name, url, icon, isExpanded }: Props) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <NavLink
      to={url}
      className="group w-20 h-[4.2] flex items-center justify-center relative"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        className={`p-2 group-hover:bg-primary group-hover:text-black rounded transition-all duration-300 pl-2 mt-5 ${
          isActive && "bg-primary text-black"
        }`}
      >
        {icon}
      </div>
      {isHover && !isExpanded && (
        <p className="absolute top-3 bg-muted border left-full w-36 h-full flex items-center pl-2 text-[1.2rem] rounded-r-xl">
          {name}
        </p>
      )}

      <span
        className={`${
          !isExpanded && "scale-0"
        } left-[4.8rem] origin-left p-2 top-5 absolute duration-200 transition-all`}
      >
        {name}
      </span>
    </NavLink>
  );
}

export default NavItem;
