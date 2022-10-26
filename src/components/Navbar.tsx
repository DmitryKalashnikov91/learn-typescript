import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='fixed'>
    <div className="nav-wrapper teal accent-4 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul  className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация</NavLink></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar