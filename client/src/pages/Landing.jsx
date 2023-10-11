import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding"
import BottomLanding from "../components/Landing/BottomLanding/BottomLanding"

const Landing = () => {
  return (
    <div className="flex flex-col w-full">
      <HeaderLanding/>

      <BottomLanding />
    </div>
  )
}

export default Landing