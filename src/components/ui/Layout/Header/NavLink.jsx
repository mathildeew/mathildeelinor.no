import { Link } from "react-router-dom";

export const NavLink = ({ to, target, text, regular, contact }) => (
  <Link to={to} onClick={() => setShowMenu(false)} target={target} className={`${regular && "text-secondary text-3xl hover:relative hover:left-1 hover:italic"} ${contact && "text-secondary font-sans  hover:italic"}`}>
    {text}
  </Link>
);
