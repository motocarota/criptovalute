import React from 'react'
import Button from 'antd/lib/button'

const ButtonGroup = Button.Group
const Options = ({ fetch }) => (
  <div>
    <h1> Options </h1>
    <label> Choose a currency: </label>
    <ButtonGroup>
      <Button onClick={() => fetch('tBTCUSD')}> Bitcoin </Button>
      <Button onClick={() => fetch('tETHUSD')}> Ethereum </Button>
      <Button onClick={() => fetch('tETCUSD')}> Ethereum Classic </Button>
      <Button onClick={() => fetch('tLTCUSD')}> Litecoin </Button>
    </ButtonGroup>
  </div>
)

export default Options
