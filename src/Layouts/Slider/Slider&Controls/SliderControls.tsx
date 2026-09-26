import type { Swiper as SwiperType } from "swiper";
import { container } from "../../../db/Style"

type SliderControlsProps = {
  swiperRef: React.RefObject<SwiperType | null>
}

const SliderControls = ({ swiperRef }: SliderControlsProps) => {

  const nextBtn = () => {
    swiperRef.current?.slideNext();
  }

  const prevBtn = () => {
    swiperRef.current?.slidePrev();
  }

  return (
    <div className={`${container} z-888`}>
      <div className=" inline-block min-w-[148px] absolute bottom-[50px] z-888  max-[1350px]:left-[50px] max-[600px]:left-[25px]">
        <div className="flex gap-[30px] w-auto">
          <button
            onClick={() => prevBtn()} className="text-white"
          >
            <i className="fa-solid fa-arrow-left text-[#bdbdbd] cursor-pointer"></i>
          </button>
          <div className="text-white pagination"></div>
          <button
            onClick={() => nextBtn()} className="text-white"
          >
            <i className="fa-solid fa-arrow-right text-[#bdbdbd] cursor-pointer"></i>
          </button>
        </div>

      </div>
    </div>
  )

}

export default SliderControls