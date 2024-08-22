import React from 'react'
import { Link } from 'react-router-dom'

function waiyatNavbar() {
  return (
    <div>

    <nav className="navbar">
        <Link to="/home" className="link">
            <span className="icon">🏠</span>
            <span className="text">Home</span>
        </Link>
        <Link to="/product" className="link">
            <span className="icon">📦</span>
            <span className="text">product</span>
        </Link>
        <Link to="/messages" className="link">
            <span className="icon">🛒</span>
            <span className="text">cart</span>
        </Link>
    </nav>

    </div>
  )
}

export default waiyatNavbar
