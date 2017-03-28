import React from 'react'
import { connect } from 'react-redux'
import logo from '../img/bitcoin.png'
import '../App.css'
import Row from '../components/Row'

const App = ({actions, currentTime}) => {
  const data = [
    {month: 'September', profit: 35000, loss: 2000},
    {month: 'October', profit: 42000, loss: 8000},
    {month: 'November', profit: 55000, loss: 5000}
  ]
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Andamento Criptovalute</h2>
      </div>
      <div className='Rows'>
        <div className='Row'>
          <Row name='BTCUSD' price='1' history={data} />
        </div>
        <p>The current Time is : {currentTime.toString()}</p>
        <button onClick={actions.currentTime.updateTime}>
         Update
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentTime: state.currentTime
  }
}

export default connect(
  mapStateToProps
)(App)
