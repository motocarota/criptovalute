import React from 'react'
import LineChart from './LineChart'

const Row = ({
  name,
  price,
  history = []
}) => { 
  return (
    <div>
      <h1>{name}: {price} </h1>
      <LineChart history={history} />
    </div>
  )
}


export default Row