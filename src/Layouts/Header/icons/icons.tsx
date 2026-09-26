
type IconsProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icons = ({ setIsOpen }: IconsProps) => {

  return (
    <>
      <div className="max-[1024px]:hidden">
        <a href="https://www.instagram.com/arcatya_zarder_jewelry1/" target="blank"><i className="fa-brands fa-instagram cursor-pointer"></i></a>
      </div>
      <div className="max-[1024px]:hidden"><i className="fa-brands fa-facebook cursor-pointer"></i></div>
      <div className="relative">
        <i className="fa-solid  fa-heart cursor-pointer"></i>
      </div>
      <div className="min-[1024px]:hidden" onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-bars text-[#9C9EA0]"></i>
      </div>
    </>
  )
  
}

export default Icons