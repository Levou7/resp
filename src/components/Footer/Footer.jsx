import React from 'react'
import './Footer.scss'

import logo from '../../img/logo.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'

import screen from '../../img/screen.png'


function Footer() {
  return (
    <div>
      <div className="ff container1">
        <div className="aBg">
          <div className="ff__left">
            <h1>Join 100 Compannies who boost their business with Product</h1>
            <button className='btn'>Get This</button>
          </div>
          <div className="ff__right">
            <img src={screen} alt="screen" />
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="footer container1">
          <div className="footer-first">
            <div className="footer-first-up">
              <a href="/"><img src={logo} alt="logo" /></a>
              <a href="/">Product</a>
            </div>
            <div className="footer-first-down">
              <a href="/"><img src={instagram} alt="instagram" /></a>
              <a href="/"><img src={facebook} alt="facebook" /></a>
              <a href="/"><img src={twitter} alt="twitter" /></a>
            </div>
          </div>
          <div className="footer-second">
            <h1>Resources</h1>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
          <div className="footer-third">
            <h1>Legal Stuff</h1>
            <p>Disclaimer</p>
            <p>Financing</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className="footer-fourth">
            <h1>knowing you're always on the best energy deal.</h1>
            <input type="text" />
            <button className='up'>Sign up Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer