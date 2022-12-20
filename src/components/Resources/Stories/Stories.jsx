import React from 'react'
import './Stories.scss'
import { data } from '../../../data/Card'
import Card from '../../Card/Card'

function Stories() {
  return (
    <div>
      <div className="resources-stories container1">
        <div className="resources-stories-txt">
          <h1>Latest Stories</h1>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
        </div>
        <div className="services__card">
          {
            data && data.map((e,i)=>(
              <Card key={i} item={e}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Stories