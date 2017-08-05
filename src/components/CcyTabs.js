import { Tabs } from 'antd'
import ReactDOM from 'react-dom'
import PriceGraph from '../components/PriceGraph'
import React from 'react'

const TabPane = Tabs.TabPane
const { ccy, data = { data: {} }, fetch } = this.props

function callback (key) {
  console.log(key)
  fetch(`${key}`)
}

ReactDOM.render(
  <Tabs defaultActiveKey='1' onChange={callback}>
    <TabPane tab='Bitcoin' key='tBTCUSD' type='card'>
      <PriceGraph ccy={ccy} history={data} />
    </TabPane>
    <TabPane tab='Etherium' key='tETHUSD' type='card'>
      <PriceGraph ccy={ccy} history={data} />
    </TabPane>
    <TabPane tab='Etherium Classic' key='tETCUSD' type='card'>
      <PriceGraph ccy={ccy} history={data} />
    </TabPane>
    <TabPane tab='Litecoin' key='tLTCUSD' type='card'>
      <PriceGraph ccy={ccy} history={data} />
    </TabPane>
  </Tabs>
)
