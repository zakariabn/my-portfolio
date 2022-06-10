import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        to={to}
        className={`py-5 inline-block ${
          match
            ? "border-b-2 border-primary text-primary font-medium"
            : "text-white"
        }`}
        {...props}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
