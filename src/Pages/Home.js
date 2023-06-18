import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from "../assets/Hamburger Day.png"

function Home() {
  return (
   <div className='Home' style={{backgroundImage:`url(${HomeImage})` } }>
     <div className='HeaderContainer'> 
     <h1>Deli'ce Burger</h1>
     <p>Burada modunuza uygun<br/> hamburgerler bulabilir<br/> hatta modunuza göre <br/>kendi burgerlerinizi<br/> oluşturabilirsiniz.</p>
     <button>Şimdi sipariş ver</button>
     <Link to="/menu"></Link>
    </div>
   </div>
  )
}

export default Home