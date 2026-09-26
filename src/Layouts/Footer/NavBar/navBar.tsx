import { Link } from "react-router-dom"
import { navSpanClasses } from "../../../db/Style"

const NavBarFooter = () => {

  return (
    <nav className={`${navSpanClasses} flex gap-[10px] flex-wrap justify-center`} >
      <Link to="/">Home</Link>
      <Link to="/colections">Collections</Link>
      <Link to="/rings">Rings</Link>
      <Link to="/necklaces">Necklaces</Link>
      <Link to="/about">About</Link>
    </nav >
  )

}

export default NavBarFooter