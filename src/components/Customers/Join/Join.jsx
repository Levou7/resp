import React from 'react'
import './Join.scss'

import trade from '../../../img/trade.png'
import rating from '../../../img/rating.png'

function Join() {
  return (
    <div>
      <div className="customer-join container1">
        <div className="customer-join-txt">
          <h1>Join thousand of other who have already received offers</h1>
        </div>
        <div className="customer-join-down">
          <div className="left">
            <img src={trade} alt="trade" />
            <h2>Business</h2>
            <p>Cash Flow Asset Backed Receivables Finance</p>
          </div>
          <div className="right">
            <img src={rating} alt="rating" />
            <h2>Enterprise</h2>
            <p>Site Acquisition Bridge  Development Financing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join