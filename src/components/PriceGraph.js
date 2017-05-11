import React from 'react'
import Row from './Row'

const PriceGraph = ({ ccy = '', history = {} }) => (
  <div>
    <div className='Rows'>
      <div className='Row'>
        {ccy.length
          ? <Row key={ccy} symbol={ccy} history={history[ccy]} />
          : <p>Nothing to show</p>}
      </div>
    </div>
  </div>
)

export default PriceGraph
