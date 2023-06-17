import React from 'react'
import Logo from "../assets/Circle Badge Burger Food Logo (1).png"
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className='LeftSide'>
            <img src={Logo}/>
        </div>
        <div className='RightSide'>
            <Link to="/">Anasayfa</Link>
            <Link to="/menu">Menü</Link>
            <Link to="/contact">İletişim</Link>
            <Link to="/about">Hakkımızda</Link>
        </div>
    </div>
  )
}
