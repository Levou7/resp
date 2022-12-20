import React from 'react'
import PriceTable from '../../PriceTable/PriceTable'
import { table } from '../../../data/Price'
import './Hero.scss'

function Hero() {
  return (
    <div>
        <div className="pricing-hero container1">
          <div className="pricing-hero-txt">
            <h2>PRICING</h2>
            <h1>Let’s get some real work done here.</h1>
            <p>Prodict is your perfect solution for working. Get started now for free</p>
          </div>
          <div className="pricing-hero-up">
            {
              table && table.map((e,i)=>(
                <PriceTable key={i} table={e}/>
              ))
            }
          </div>
        </div>
        <div className="bgG">
          <div className="pricing-hero-down container1">
            <h2>ENTERPRISE</h2>
            <h1>Are you interested  in a custom-tailored plan?</h1>
            <p>Product is a set of advanced features for really large teams with projects.</p>
            <button className='btn'>Get in touch with us</button>
          </div>
        </div>
    </div>
  )
}

export default Hero