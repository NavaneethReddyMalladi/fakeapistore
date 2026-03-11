import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <nav className="navbar">
      <h2 className="logo">MyStore</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        </li>

        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar