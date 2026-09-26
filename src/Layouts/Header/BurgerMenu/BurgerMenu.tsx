import NavItem from "../NavBar/NavItem"

type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {

  const changed_isOpenState = () => {
    setIsOpen(false)
  }

  return (
    <div className={` fixed z-[999] right-0 top-0 h-screen w-[250px] flex flex-col gap-[70px] pt-[56px] pl-[40px] backdrop-blur-[15px] bg-[#615343]/50
          ${isOpen ? "block" : "hidden"}
        `}>
      <nav className="flex flex-col gap-[20px]">
        <div><NavItem to="/">Home</NavItem></div>
        <div> <NavItem to="/collections">Collections</NavItem></div>
        <div><NavItem to="/rings">Rings</NavItem></div>
        <div><NavItem to="/necklaces">Necklaces</NavItem></div>
        <div><NavItem to="/about">About</NavItem></div>
      </nav>
      <div onClick={() => changed_isOpenState()} className="absolute top-4 right-8 text-white">X</div>
    </div>
  )

}

export default BurgerMenu