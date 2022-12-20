import React from 'react'
import './Product.scss'

import komps from '../../../img/komps.png'
import file from '../../../img/file.png'
import acc from '../../../img/acc.png'
import border from '../../../img/border.png'
import plus from '../../../img/plus.png'

function Product() {
  return (
    <div>
        <div className="pricing-product container1">
          <div className="pricing-product-txt">
            <h1>Product is being used with great effects alongside:</h1>
          </div>
          <div className="pricing-product-up">
            <div className="left">
              <img src={komps} alt="komps" />
            </div>
            <div className="right">
              <div className="right-first">
                <img src={border} alt="Lborder" />
                <h1>Enterpreneur</h1>
              </div>
              <p>Product is a great way to help medium and samall enterprise owners achieve their goals</p>
              <div className="right-first">
                <img src={acc} alt="acc" />
                <h1>Accountants</h1>
              </div>
              <p>Whether you are working on contract with clients, or on other key accounting documents, Product is for you</p>
              <div className="right-first">
                <img src={file} alt="file" />
                <h1>Universities</h1>
              </div>
              <p>Organize university projects and have documents easily graded online with Product</p>
            </div>
          </div>
          
          <div className="pricing-question">
            <div className="pricing-question-txt">
              <h1>Frequently asked question</h1>
              <p>Something is not clear? You need help? Check our FAQ section</p>
            </div>
            <div className="pricing-question-first">
              <img src={plus} alt="plus" />
              <h2>What are my payment option?</h2>
            </div>
            <div className="pricing-question-first">
              <img src={plus} alt="plus" />
              <h2>How can I invite collaborator to platform?</h2>
            </div>
            <p>After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding.</p>
            <div className="pricing-question-first">
              <img src={plus} alt="plus" />
              <h2>Can I upgrade my plan?</h2>
            </div>
            <div className="pricing-question-first">
              <img src={plus} alt="plus" />
              <h2>Can I cancel my plan at anytime?</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product