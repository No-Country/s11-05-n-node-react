import Advantages from "../components/Landing/Advantages/Advantages"
import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding"

const Landing = () => {
  return (
    <div className="flex-col w-full">
      <HeaderLanding/>
      <Advantages/>
    </div>
  )
}

export default Landing