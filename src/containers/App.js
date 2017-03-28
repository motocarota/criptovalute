import React from 'react'
import { connect } from 'react-redux'
import logo from '../img/bitcoin.png'
import '../App.css'
import Row from '../components/Row'

const App = ({actions, state}) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Andamento Criptovalute</h2>
      </div>
      <div className='Rows'>
        <div className='Row'>
          {state.data.map(el => (
            <Row key={el} name={el.name} price={el.price} history={el.history} />
            )
           )
          }
        </div>
        <p>The current Time is : {state.currentTime.toString()}</p>
        <button onClick={actions.currentTime.updateTime}>Update </button>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return { state }
}

export default connect(
  mapStateToProps
)(App)
