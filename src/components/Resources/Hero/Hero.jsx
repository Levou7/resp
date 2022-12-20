import React from 'react'
import './Hero.scss'

import comp2 from '../../../img/comp2.png'
import people3 from '../../../img/people3.png'

function Hero() {
  return (
    <div>
      <div className="resources-hero container1">
        <div className="resources-hero-up">
          <div className="left">
            <h1>Great Business made with Product.</h1>
            <p>Build better customer relationships easily messaging that provides a more personal experience for you and your customers.</p>
            <div className="input-group mb-3 inpGr">
              <input type="text" className="form-control" placeholder="Enter your email adress" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
              <button className="btn btn-outline-secondary" type="button" id="button-addon1">Join Now</button>
            </div>
            <div className="people">
              <img src={people3} alt="people3" />
              <p>Join over <span>4,000+</span> other</p>
            </div>
          </div>
          <div className="right">
            <img src={comp2} alt="comp2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero