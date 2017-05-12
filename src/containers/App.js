import React from 'react'
import { connect } from 'react-redux'
import * as dataActions from '../redux/modules/data'
import logo from '../img/bitcoin.png'
import '../App.css'

import Tabs from 'antd/lib/tabs'
import Card from 'antd/lib/card'

import PriceGraph from '../components/PriceGraph'
import Options from '../components/Options'
import About from '../components/About'

const TabPane = Tabs.TabPane

class App extends React.Component {
  componentDidMount () {
    const { fetch } = this.props
    fetch('tBTCUSD')
  }

  render () {
    const { ccy, data = { data: {} }, fetch } = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>
            Cryptocurrencies
          </h2>
        </div>
        <Card style={{ width: '80%', margin: '0 auto' }}>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Price Graph' key='1' type='card'>
              <PriceGraph ccy={ccy} history={data} />
            </TabPane>
            <TabPane tab='Options' key='2'>
              <Options fetch={fetch} />
            </TabPane>
            <TabPane tab='About' key='3'>
              <About />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetch: symbol => dispatch(dataActions.actions.fetchData(symbol))
  }
}
function mapStateToProps (state) {
  const data = state.data || {}
  return {
    data: data.data,
    ccy: data.currentCcy
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
