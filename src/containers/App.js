import React from 'react'
import { connect } from 'react-redux'
import logo from '../img/bitcoin.png'
import '../App.css'
import Row from '../components/Row'
import * as currentTimeActions from '../redux/modules/currentTime'
import * as dataActions from '../redux/modules/data'
// app : {}
import Button from 'antd/lib/button'
import Tabs from 'antd/lib/tabs'
import Card from 'antd/lib/card'

const TabPane = Tabs.TabPane
const ButtonGroup = Button.Group

function callback (key) {
  console.log('show tab n.', key)
}

class App extends React.Component {
  componentDidMount () {
    console.log('get all the stuff...')
    const { fetch } = this.props
    const list = ['tETHUSD', 'tLTCUSD', 'tBTCUSD']
    list.map(s => fetch(s))
  }
  render () {
    const { data, time, updateTime, fetch } = this.props
    const ccy = Object.keys(data)
    console.log(ccy)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>
            Cryptocurrencies
          </h2>
        </div>
        <Card style={{ width: '80%', margin: '0 auto' }}>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane tab='Price Graph' key='1' type='card'>
              <div className='Rows'>
                <div className='Row'>
                  {ccy.length
                    ? <Row key={ccy} symbol={ccy} history={data[ccy]} />
                    : <span>Nothing to show</span>}
                </div>
                <p>The current Time is : {time.toString()}</p>
                <button onClick={updateTime}>Update </button>
              </div>
            </TabPane>
            <TabPane tab='Options' key='2'>
              Pick up your currency
              <ButtonGroup>
                <Button onClick={() => fetch('tAHAHAH')}> Get err </Button>
                <Button onClick={() => fetch('tLTCUSD')}> Get LTC </Button>
                <Button onClick={() => fetch('tETCUSD')}> Get ETC </Button>
                <Button onClick={() => fetch('tBTCUSD')}> Get BTC </Button>
              </ButtonGroup>
            </TabPane>
            <TabPane tab='About' key='3'>
              Blah blah blah
            </TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.data,
    time: state.currentTime
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateTime: () => dispatch(currentTimeActions.actions.updateTime()),
    fetch: symbol => dispatch(dataActions.actions.fetchData(symbol))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
