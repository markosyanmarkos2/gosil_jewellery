
const DetailedPart = () => {

  return (
    <div className="w-[50%] flex flex-col gap-[10px] justify-center max-[1024px]:w-[90%] max-[1024px]:">
      <div>
        <p className="text-[#9F7E54]">OUR CRAFTSMANSHIP</p>
      </div>
      <div>
        <h1 className="text-[40px] font-[Georgia] max-[1260px]:text-[32px] max-[500px]:text-[25px] ">Designed by Hand, Made to Last</h1>
      </div>
      <div className="">
        <p className="text-[#9C9EA0] max-[1260px]:text-[14px] ">
          Every piece at Aurelia is a result of skilled craftsmanship,
          careful selection of the finest materials and a deep respect
          for timeless design. We belive true luxury is found
          in the detalis.
        </p>
      </div>
      <div>
        <button className="py-[10px] px-[30px] max-[500px]:px-[20px] max-[500px]:py-[5px] border border-[#9F7E54] border-[2px] cursor-pointer transition-[0.3s] hover:bg-[#9F7E54] hover:text-[#242424] ">
          LEARN MORE
        </button>
      </div>
    </div>
  )

}

export default DetailedPart