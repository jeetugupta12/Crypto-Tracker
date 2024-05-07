import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar' >
        <div className="logo">
            <h1 >CryptoVerse </h1>
             
        </div>
        <div className='navlink'>
        <ul >
          <li> <Link to='/' >Home</Link> </li>
          <li> <Link to='/coins'>Coins</Link></li>
          <li> <Link to='/exchanges'>Exchanges</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
