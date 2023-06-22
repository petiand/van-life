import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
    return (
      <nav className='header'>
          <Link to="/" className="header-title"> #VANLIFE </Link>
          <div className="header-list">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </div>
      </nav>
    )
  }