import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './img/bitcoin.png'
import './App.css';
import Row from './components/Row'
import CustomTheme from './components/CustomTheme'
import LineChart from './components/LineChart'
import ColumnChart from './components/ColumnChart'


const App = ({actions, currentTime}) => {
  
    const dataSet1 = [
      {x: new Date(2000, 1, 1), y: 12},
      {x: new Date(2000, 6, 1), y: 10},
      {x: new Date(2000, 12, 1), y: 11},
      {x: new Date(2001, 1, 1), y: 50},
      {x: new Date(2002, 1, 1), y: 4},
      {x: new Date(2003, 1, 1), y: 6},
      {x: new Date(2004, 1, 1), y: 5},
      {x: new Date(2005, 1, 1), y: 7},
      {x: new Date(2006, 1, 1), y: 8},
      {x: new Date(2007, 1, 1), y: 9},
      {x: new Date(2008, 1, 1), y: -8.5},
      {x: new Date(2009, 1, 1), y: -9},
      {x: new Date(2010, 1, 1), y: 5},
      {x: new Date(2013, 1, 1), y: 1},
      {x: new Date(2014, 1, 1), y: 2},
      {x: new Date(2015, 1, 1), y: -5}
    ]
    return (
      console.log(Row),
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Andamento Criptovalute</h2>
        </div>       
        <div className='Rows'>
          <div className='Row'>
            <Row name='BTCUSD' price='1' history={[1, 2, 3, 4]} />
            <LineChart />
          </div>  
          <div>
            <Row name='ETHUSD' price='99' history={[11, 12, 31]} />
            <CustomTheme dataSetOne={dataSet1}/>
          </div>
          <div className='Row'> 
            <Row name='ETCUSD' price='22' history={[21, 12, 23]} />
            <ColumnChart />
          </div>
          <div className='Row'>  
            <Row name='ZECUSD' price='3' history={[14, 2, 13]} />
             <ColumnChart />
          </div>
          <div className='Row'>  
            <Row name='XMRUSD' price='15' history={[12, 21, 31]} />
             <LineChart /> 
          </div>
          <div className='Row'>  
            <Row name='DASHUSD' price='15' history={[122, 211, 313]} />
             <LineChart />           
          </div>  
        </div>
      </div>
    );
  }

const mapStateToProps = (state) =>{
  return{
    currentTime: state.currentTime
  }
}

export default connect(
  mapStateToProps
)(App)
