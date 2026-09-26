import { useState } from "react"
import { container } from "../../db/Style.ts"
import BurgerMenu from "./BurgerMenu/BurgerMenu.tsx"
import NavBar from "./NavBar/navBar.tsx"
import Icons from "./icons/icons.tsx"

const Header_layout = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`${container}`}>
        <header className="flex items-center justify-between py-[10px]">
          <div>
            <h1 className="text-[#EBD4B1]">GOSIL-JEWELERY</h1>
          </div>
          <div className="max-[1024px]:hidden">
            <NavBar />
          </div>
          <div className="flex gap-[15px] text-[#9C9EA0] ">
            <Icons setIsOpen={setIsOpen} />
          </div>
        </header>
      </div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header_layout