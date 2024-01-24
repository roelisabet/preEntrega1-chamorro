import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (

    <div className='contenedor'>
      <nav className='navbar'>
        <div className='logo'>shopDigital</div>

        <ul className='links'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Quienes Somos</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <CartWidget />
      </nav>
        
    </div>
    

  )
}

export default NavBar