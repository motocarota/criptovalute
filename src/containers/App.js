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
          <ButtonGroup>
            <Button onClick={() => fetch('tAHAHAH')}> Get err </Button>
            <Button onClick={() => fetch('tLTCUSD')}> Get LTC </Button>
            <Button onClick={() => fetch('tETCUSD')}> Get ETC </Button>
            <Button onClick={() => fetch('tBTCUSD')}> Get BTC </Button>
          </ButtonGroup>
          <div>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='Tab 1' key='1'>Content of Tab Pane 1</TabPane>
              <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
              <TabPane tab='Tab 3' key='3'>Content of Tab Pane 3</TabPane>
            </Tabs>
            <h1>DP</h1>
            <Button type='primary'>Button</Button>
          </div>
        </div>
        <div className='Rows'>
          <div className='Row'>
            {ccy.length
              ? <Row key={ccy} symbol={ccy} history={data[ccy]} />
              : <span>Nothing to show</span>}
          </div>
          <p>The current Time is : {time.toString()}</p>
          <button onClick={updateTime}>Update </button>
        </div>
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
