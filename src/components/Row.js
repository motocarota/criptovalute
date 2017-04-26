import React from 'react'
import LineChart from './LineChart'

const Row = ({ symbol, history = [] }) => {
  return history.length
    ? <div>
      <h1>{symbol}: </h1>
      <LineChart history={history} />
    </div>
    : <div> <h1> Nothing to Show </h1> </div>
}
export default Row
