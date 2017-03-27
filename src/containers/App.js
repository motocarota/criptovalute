import React from 'react'
import { connect } from 'react-redux'
import logo from '../img/bitcoin.png'
import '../App.css';
import Row from '../components/Row'
import LineChart from '../components/LineChart'


const App = ({actions, currentTime}) => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Andamento Criptovalute</h2>
        </div>       
        <div className='Rows'>
          <div className='Row'>
            <Row name='BTCUSD' price='1' history={[1, 2, 3, 4]}  />
            <LineChart />
            <p>The current Time is : {currentTime.toString()}</p>
            <button onClick={actions.currentTime.updateTime}>
              Update
            </button>               
          </div>  
        </div>
      </div>
    );
  }

const mapStateToProps = (state) =>{
  return{
    currentTime: state.currentTime,
  }
}

export default connect(
  mapStateToProps
)(App)
