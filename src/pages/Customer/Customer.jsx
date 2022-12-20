import React from 'react'
import Clients from '../../components/Customers/Clients/Clients'
import Join from '../../components/Customers/Join/Join'
import Work from '../../components/Customers/Work/Work'
import './Customer.scss'

function Customer() {
  return (
    <div>
        <Clients/>
        <Work/>
        <Join/>
    </div>
  )
}

export default Customer