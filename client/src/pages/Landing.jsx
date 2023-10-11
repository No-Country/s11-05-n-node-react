import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding"
import LandingBottom from "../components/Landing/LandingBottom/LandingBottom"

const Landing = () => {
  return (
    <div className="flex flex-col w-full">
      <HeaderLanding/>

      <LandingBottom />
    </div>
  )
}

export default Landing