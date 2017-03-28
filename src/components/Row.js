import React from 'react'
import LineChart from './LineChart'
import Api from '../components/Api'


const Row = ({
    name,
    price,
    history = []
}) =>
  <div>
    <p>The current API call response is : <i id='20' /> <button onClick={Api}> Get Api </button>{Api}</p>
    <h1>{name}: {price} </h1>
    <LineChart history={history} />
  </div>

export default Row
