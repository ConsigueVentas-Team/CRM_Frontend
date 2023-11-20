import { useState } from "react";

import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  url: string;
  icon: any;
}


function NavItem({ name, url, icon }:Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <NavLink
      to={url}
      className="group w-16 h-14 flex items-center justify-center relative"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {isHover && (
        <p className="absolute bg-muted border left-full w-36 h-full flex items-center pl-2 text-[1.2rem] rounded-r-xl">
          {name}
        </p>
      )}
      <div className="p-2 group-hover:bg-primary group-hover:text-black rounded transition-all duration-300">
      {icon}
      </div>
    </NavLink>
  );
}

export default NavItem;
