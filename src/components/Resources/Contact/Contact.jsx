import React from 'react'
import './Contact.scss'

import instagram from '../../../img/instagram.png'
import facebook from '../../../img/facebook.png'
import twitter from '../../../img/twitter.png'

function Contact() {
  return (
    <div>
        <div className="resources-contact">
          <div className="resources-contact-txt">
            <h1>Contact Us</h1>
            <p>Need more detailed information? Get in touch with us.</p>
          </div>
          <div className="resources-contact-inte">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="resources-contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96678.79860334641!2d72.24960582158731!3d40.77934317740644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2z0JDQvdC00LjQttCw0L0sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1671390882377!5m2!1sru!2s" width="600" height="450" style={{border:0}} loading="lazy" title='ifream'></iframe>
          </div>
          <div className="resources-contact-contact">
            <div className="border">
              <h1>Send a message</h1>
              <input type="text" placeholder='Your Name'/>
              <input type="email" placeholder='Your Email'/>
              <input type="text" placeholder='Your Message'/>
              <div className="btn">
                <button className="btn">Send</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact