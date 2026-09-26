import { container } from "../../db/Style"
import DetailedPart from "./DetailedPart"

const Craftmanship_Layout = () => {
  return (
    <div className=" bg-[#111111]">
      <div className={`${container}`}>
        <div className="flex gap-[80px] text-white py-[20px] max-[1260px]:gap-[40px] max-[1024px]:flex-col max-[1024px]:items-center">
          <div className="w-[50%] flex items-center justify-center max-[1024px]:w-[100%] ">
            <img width={620} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuOet_WdLQl1orlRGczMErjyoUkzDBLWMwxbPjw7zw&s=10" alt="" />
          </div>
          <DetailedPart />
        </div>
      </div>
    </div>
  )
}

export default Craftmanship_Layout