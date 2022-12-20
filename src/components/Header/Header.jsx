import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

import logo from '../../img/logo.png'
import Dmode from '../../img/mode.png'

function Header() {
  const [dark, setDark] = useState('light')
  function mode (){
    window.localStorage.setItem('mode', 'dark')
    setDark(window.localStorage.getItem('mode'))
    let md = document.querySelector('.md')
    let mdL = document.querySelector('.mdL')
    md.style.display = 'none'
    mdL.style.display = 'inline'
  }
  function modeL (){
    window.localStorage.setItem('mode', 'light')
    setDark(window.localStorage.getItem('mode'))
    let mdL = document.querySelector('.mdL')
    let md = document.querySelector('.md')
    mdL.style.display = 'none'
    md.style.display = 'inline'
  }
  return (
    <div className={dark == 'dark' ? 'dark' : dark == 'light'? 'bg' : 'bg'}>
      <div className='header container1'>
        <div className="header-left">
          <a href="/"><img src={logo} alt="logo" /></a>
          <a href="/">Product</a>
        </div>
        <div className="header-right">
          <Link to='/'>Home</Link>
          <Link to='/customer'>Customer</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/resources'>Resources</Link>
          <button className='in'>Sign In</button>
          <button className='up'>Sign Up</button>
          <button className='md'><img src={Dmode} alt="" onClick={mode}/></button>
          <button className='mdL'><img src={Dmode} alt="" onClick={modeL}/></button>
        </div>
      </div>
    </div>
  )
}

export default Header