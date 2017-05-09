import React from 'react'
import { connect } from 'react-redux'
import logo from '../img/bitcoin.png'
import '../App.css'
import Row from '../components/Row'
import * as currentTimeActions from '../redux/modules/currentTime'
import * as dataActions from '../redux/modules/data'
// app : {}

class App extends React.Component {
  componentDidMount () {
    console.log('get all the stuff...')
    const { fetch } = this.props
    const list = ['tETHUSD', 'tLTCUSD']
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
          <h2>Crypto currencies
          </h2>
          <p>
            <button onClick={() => fetch('tAHAHAH')}> Get err </button>
            <button onClick={() => fetch('tLTCUSD')}> Get LTC </button>
            <button onClick={() => fetch('tETCUSD')}> Get ETC </button>
            <button onClick={() => fetch('tBTCUSD')}> Get BTC </button>
          </p>
        </div>
        <div className='Rows'>
          <div className='Row'>
            {ccy.length
              ? ccy.map(key => (
                <Row key={key} symbol={key} history={data[key]} />
                ))
              : <span>nothing to show</span>}
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
