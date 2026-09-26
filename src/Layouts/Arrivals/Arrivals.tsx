import { container } from "../../db/Style"
import ArrivalsList from "./ArrivalsList"
import PartTop_Arrivals from "./PartTop"

const Arrivals_layout = () => {

  return (
    <div className={`${container} py-[30px] gap-[20px] flex flex-col`}>
      <PartTop_Arrivals />
      <div className="grid grid-cols-4 max-[1280px]:grid-cols-2 gap-[30px] max-[800px]:grid-cols-1 justify-items-center ">
        <ArrivalsList />
      </div>
    </div>
  )

}

export default Arrivals_layout