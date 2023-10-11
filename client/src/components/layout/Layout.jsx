import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='container h-screen '>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout