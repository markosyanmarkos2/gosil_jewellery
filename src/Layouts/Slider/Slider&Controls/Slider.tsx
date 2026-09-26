import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import images from "../../../db/DataSlider";
import { container } from "../../../db/Style";
import SliderControls from "./SliderControls";

const sliderImage = [...images, ...images, ...images]

const Slider = () => {

  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <Swiper
        className="h-[500px]"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination]}
        pagination={{
          el: ".pagination",
          clickable: true
        }}
      >
        {sliderImage.map((el) => (
          <SwiperSlide
            className="text-white bg-cover  bg-no-repeat bg-center w-full h-[500px] bg-[length:120%_700px]"
            style={{ backgroundImage: `url(${el.img})` }}
          >
            <div className={`${container} h-[500px]`}>
              <div className="w-[50%] h-full flex justify-center flex-col gap-[10px] max-w-[600px] min-w-[220px]">
                <div><p className="text-[14px] sm:text-[16px] tracking-[2px] text-[#9C9EA0]">{el.smallTitle}</p></div>
                <div><h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-[Georgia] ">{el.title}</h1></div>
                <div className="max-w-[400px]"><span className="text-[#9C9EA0]">{el.body}</span></div>
                {el.body && (
                  <div className="w-[200px] flex justify-center py-[5px] text-[#9C9EA0] border border-[2px] border-[#9F7E54] transition-[0.3] hover:bg-[#9F7E54] hover:text-white"><button className="cursor-pointer ">EXPLORE COLLECTION </button></div>
                )}
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
      <SliderControls swiperRef={swiperRef} />
    </>

  )
}

export default Slider