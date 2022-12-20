import React from 'react'
import './Hero.scss'

import tel from '../../../img/tel.png'
import three from '../../../img/three.png'

import cursor from '../../../img/cursor.png'
import like from '../../../img/like.png'
import water from '../../../img/water.png'
import time from '../../../img/time.png'


function Hero() {
  return (
    <div>
        <div className="bgW">
          <div className="hero container1">
            <div className="hero-left">
              <h1>Work  at the speed of thought</h1>
              <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
              <button className='btn'>Get Started</button>
              <button className='btn2'><img src={three} alt="triangle" />Watch the video</button>
            </div>
            <div className="hero-right">
              <img src={tel} alt="" />
            </div>
          </div>

          <div className="product container1">
            <div className="product-txt">
              <h1>Product was Built Specifically for You</h1>
            </div>
            <div className="product__elem">
              <div className="product__elem-first">
                <img src={cursor} alt="cursor" />
                <h1>First click tests</h1>
                <p>While most people enjoy casino gambling,</p>
              </div>
              <div className="product__elem-second">
                <img src={water} alt="water" />
                <h1>Design surveys</h1>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
              <div className="product__elem-third">
                <img src={like} alt="like" />
                <h1>Preference tests</h1>
                <p>The Myspace page defines the individual.</p>
              </div>
              <div className="product__elem-fourth">
                <img src={time} alt="time" />
                <h1>Five second tests</h1>
                <p>Personal choices and the overall personality of the person.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero