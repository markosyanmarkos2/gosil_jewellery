import Arrivals_layout from "../Layouts/Arrivals/Arrivals"
import Craftmanship_Layout from "../Layouts/Craftmanship/Craftmanship"
import Footer_layout from "../Layouts/Footer/Footer"
import Header_layout from "../Layouts/Header/Header"
import Slider_layouts from "../Layouts/Slider/Slider"

const HomePage_Component = () => {

  return (
    <>
      {/*  */}
      <Header_layout />
      {/*  */}
      <Slider_layouts />
      {/*  */}
      <Arrivals_layout />
      {/*  */}
      <Craftmanship_Layout />
      {/*  */}
      <Footer_layout />
      {/*  */}
    </>
  )
}
export default HomePage_Component