import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='pt-14 pb-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout