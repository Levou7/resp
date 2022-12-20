import React from 'react'
import './Process.scss'

import docs from '../../../img/docs.png'
import gallery from '../../../img/gallery.png'
import komp from '../../../img/komp.png'

import orange from '../../../img/orange.png'
import red from '../../../img/red.png'
import blue from '../../../img/blue.png'

import ava1 from '../../../img/ava1.png'
import ava2 from '../../../img/ava2.png'
import ava3 from '../../../img/ava3.png'
import ava4 from '../../../img/ava4.png'


function Process() {
  return (
    <div>
      <div className="bgW">
        <div className="process container1">
          <div className="process__first imgTxt">
            <div className="process__first-txt Txt">
              <h2>Effortless Validation for</h2>
              <h1 className='bottom'>Management</h1>
              <h2>Accessory makers</h2>
              <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
              <h2>Alterationists</h2>
              <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
            </div>
            <div className="process__first-img">
              <img src={docs} alt="docx" />
            </div>
          </div>
          <div className="process__second imgTxt">
            <div className="process__second-img">
              <img src={komp} alt="komp" />
            </div>
            <div className="process__second-txt Txt">
              <h2>Easier decision making for</h2>
              <h1>Customer Support</h1>
              <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
              <div className="process__second-txt-txt">
                <div className="process__second-txt-txt-1">
                  <img src={orange} alt="orange" />
                  <p>Never worry about overpaying for your energy again. </p>
                </div>
                <div className="process__second-txt-txt-1">
                  <img src={red} alt="red" />
                  <p>We will only switch you to energy companies that we trust and will treat you right</p>
                </div>
                <div className="process__second-txt-txt-1">
                  <img src={blue} alt="blue" />
                  <p>We track the markets daily and know where the savings are.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="process__third imgTxt">
            <div className="process__third-txt Txt">
              <h2>Optimisation for</h2>
              <h1>Collaborative</h1>
              <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior.</p>
              <h2>Accessory makers</h2>
              <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
              <h2>Alterationists</h2>
              <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
            </div>
            <div className="process__third-img">
              <img src={gallery} alt="gallery" />
            </div>
          </div>
        </div>

        <div className="quick container1">
          <div className="quick__txt">
            <h1>Quick & Easy Process</h1>
            <p>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
          </div>
          <div className="quick__first">
            <div className="quick__first-left">
              <img src={ava1} alt="ava1" />
              <p>I can take care of your pitch</p>
            </div>
            <div className="quick__first-right">
              <p>I can prototype your app</p>
              <img src={ava2} alt="ava2" />
            </div>
          </div>
          <div className="quick__second">
            <div className="quick__second-left">
              <p>I can design you website</p>
              <img src={ava3} alt="ava3" />
            </div>
            <div className="quick__second-right">
              <img src={ava4} alt="ava4" />
              <p>I can help marketing strategy</p>
            </div>
          </div>
          <div className="btn">
            <button className="btn btnBg">Contact our expert</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process