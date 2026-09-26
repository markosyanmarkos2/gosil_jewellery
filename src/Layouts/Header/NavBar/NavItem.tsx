import { NavLink } from "react-router-dom";
import { navSpanClasses } from "../../../db/Style";

type NavItemProps = {
  to: string;
  children: string;

}

const NavItem = ({ to, children }: NavItemProps) => {

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${navSpanClasses} ${isActive ? "text-[#EBD4B1] border-b border-[#9F7E54] text-[#9F7E54]" : ""}`
      }
    >
      {children}
    </NavLink>
  )
  
}

export default NavItem