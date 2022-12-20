import React from 'react'
import './Work.scss'

import mac1 from '../../../img/mac1.png'
import mac2 from '../../../img/mac2.png'
import mac3 from '../../../img/mac3.png'

function Work() {
  return (
    <div>
        <div className="customer-work container1">
          <div className="customer-work-txt">
            <h1>How Product Work?</h1>
          </div>
          <div className="customer-work-three">
            <div className="first">
              <div className="first-left">
                <img src={mac1} alt="mac1" />
              </div>
              <div className="first-right">
                <h2>STEP 1</h2>
                <h1>Apply for a product</h1>
                <p>Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology </p>
              </div>
            </div>
            <div className="first">
              <div className="first-left">
                <h2>STEP 2</h2>
                <h1>Pay fully refundable</h1>
                <p>Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology </p>  
              </div>
              <div className="first-right">
                <img src={mac2} alt="mac2" />
              </div>
            </div>
            <div className="first">
              <div className="first-left">
                <img src={mac3} alt="mac3" />
              </div>
              <div className="first-right">
                <h2>STEP 3</h2>
                <h1>Completion</h1>
                <p>Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement</p>
              </div>
            </div>
            <div className="btn">
              <button className="btn">Get in touch with us</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work