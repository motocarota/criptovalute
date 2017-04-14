import React from 'react'
import { connect } from 'react-redux'
import logo from '../img/bitcoin.png'
import '../App.css'
import Row from '../components/Row'
import * as currentTimeActions from '../redux/modules/currentTime'
import * as dataActions from '../redux/modules/data'

const App = ({ data, time, updateTime, fetch }) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Andamento Criptovalute</h2>
      <p>
        <button onClick={() => fetch('tDASHUSD')}> Get DASH </button>
        <button onClick={() => fetch('tBTCUSD')}> Get BTC </button>
      </p>
      </div>
      <div className='Rows'>
        <div className='Row'>
          {data.map(el => (
            <Row key={el.name} name={el.name} price={el.price} history={el.history} />
            )
           )
          }
        </div>
        <p>The current Time is : {time.toString()}</p>
        <button onClick={updateTime}>Update </button>
      </div>
    </div>
  )
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
    fetch: (symbol) => dispatch(dataActions.actions.fetchData(symbol))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
