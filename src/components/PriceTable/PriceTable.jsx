import React from 'react'
import './PriceTable.scss'

function PriceTable({table}) {
  return (
    <div className='prc'>
        <div className="card">
            <div className="card-body">
              <h1 className="card-title h1">{table.curse}</h1>
              <h2 className="card-title h2">{table.price}</h2>
              <p className='card-text'>{table.txt1}</p>
              <p className='card-text'>{table.txt2}</p>
              <p className='card-text'>{table.txt3}</p>
              <button className="btn">{table.btn}</button>
            </div>
        </div>
    </div>
  )
}

export default PriceTable