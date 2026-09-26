import { container } from "../../db/Style"
import IconsFooter from "./Icons"
import NavBarFooter from "./NavBar/navBar"

const Footer_layout = () => {
  return (
    <div className={`${container}`}>
      <footer >
        <div className="flex items-center gap-[30px] max-[1260px]:flex-col">
          <div className="flex py-[10px] items-center justify-between w-full max-[1260px]:flex-col max-[1260px]:gap-[20px]">
            <div><h1 className="text-[#EBD4B1]">GOSIL-JEWELERY</h1></div>
            <NavBarFooter />
            <IconsFooter />
          </div>
          <div className="text-[#9C9EA0]">
            <p className="text-[12px] w-[250px] text-center">@ 2025 Gosil-Jewelery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer_layout