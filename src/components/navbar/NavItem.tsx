import { useState } from "react";

import { NavLink } from "react-router-dom";

function NavItem({ name, urlPage, urlIcon }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <NavLink
      to={urlPage}
      className="w-16 h-14 flex items-center justify-center relative"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {isHover && (
        <p className="absolute left-full w-36 h-full flex items-center pl-2 text-[1.2rem] rounded-r-xl">
          {name}
        </p>
      )}
      <img className="h-3/5" src={urlIcon} alt="" />
    </NavLink>
  );
}

export default NavItem;
