import React from 'react'
import { data } from '../../../data/Card'
import { table } from '../../../data/Price'
import Card from '../../Card/Card'
import PriceTable from '../../PriceTable/PriceTable'
import './Services.scss'

function Services() {
  return (
    <div>
      <div className="services container1">
        <h1>Contents Strategies</h1>
        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
        <div className="services__card">
          {
            data && data.map((e,i)=>(
              <Card key={i} item={e}/>
            ))
          }
        </div>
      </div>
      <div className="bgB">
        <div className="price container1">
          <div className="price__card">
            {
              table && table.map((e,i)=>(
                <PriceTable key={i} table={e}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services