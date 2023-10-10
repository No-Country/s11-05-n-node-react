import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/" aria-describedby="Pagina de Inicio">
      LetsPlay
      </Link>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      
    </footer>
  )
}

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
    <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default Layout