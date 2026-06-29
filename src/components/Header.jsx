import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/daya-logo.jpg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4>
          <Link className="link" to="/">Daya Pharmatech</Link>
        </h4>
      </div>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header