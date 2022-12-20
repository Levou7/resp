import React from 'react'
import './Clients.scss'

import airbnb from '../../../img/airbnb.png'
import google from '../../../img/google.png'
import microsoft from '../../../img/microsoft.png'
import fedex from '../../../img/fedex.png'

import cursor from '../../../img/cursor.png'
import water from '../../../img/water.png'
import like from '../../../img/like.png'


function Clients() {
  return (
    <div>
      <div className="customer-clients container1">
        <div className="customer-clients-txt">
          <h1>Our Clients</h1>
        </div>
        <div className="customer-clients-inte">
          <img src={airbnb} alt="airbnb" />
          <img src={google} alt="google" />
          <img src={microsoft} alt="microsoft" />
          <img src={fedex} alt="fedex" />
        </div>
      </div>

      <div className="bgG">
        <div className="customer-choose container1">
          <div className="customer-choose-txt">
            <h1>Why Choose Product?</h1>
          </div>
          <div className="customer-choose-three">
            <div className="first">
              <img src={cursor} alt="cursor" />
              <h2>Special Business</h2>
              <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </div>
            <div className="first">
              <img src={water} alt="water" />
              <h2>Instant Result</h2>
              <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </div>
            <div className="first">
              <img src={like} alt="like" />
              <h2>Fastest to organize</h2>
              <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients