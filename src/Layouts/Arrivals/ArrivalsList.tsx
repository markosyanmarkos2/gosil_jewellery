import { data, type Product } from "../../db/DataArrivals";
import { useState } from "react"

const ArrivalsList = () => {

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("products")
    return saved ? JSON.parse(saved) : data
  })

  const changed = (id: number) => {

    const newData = products.map((el) => (
      el.id === id
        ? { ...el, like: !el.like }
        : el
    ))

    setProducts(newData);
    localStorage.setItem("products", JSON.stringify(newData))
  }

  return (
    <>
      {products.map((el) => (
        <div key={el.id} className="flex flex-col gap-[15px] pb-[15px] border border-[#242424] border-[2px] max-w-[286px] ">
          <div><img className="w-[286px] h-[286px]" src={el.img} alt="" /></div>
          <div className="px-[20px] text-[#9C9EA0]">
            <div><p >{el.title}</p></div>
            <div className="flex justify-between ">
              <span>{el.price}</span>
              <button onClick={() => changed(el.id)}><i className={`${el.like ? "text-red-700" : "text-white"} fa-solid  fa-heart cursor-pointer`}></i></button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ArrivalsList