import React from 'react'
import './Card.scss'

function Card({item}) {
  return (
    <div>
      <div className="card">
        <img src={item.img} alt="img" className='card-img-top'/>
        <div className="card-body">
          <p className='card-text'>{item.title}</p>
          <h2 className='card-title'>{item.txt}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card