import NavItem from "../NavBar/NavItem"

const NavBar = () => {

  return (
    <nav className="flex gap-">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/colections">Collections</NavItem>
      <NavItem to="/rings">Rings</NavItem>
      <NavItem to="/necklaces">Necklaces</NavItem>
      <NavItem to="/about">About</NavItem>
    </nav>
  )

};

export default NavBar