import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'
import Debug from './Debug'

const LineChart = ({history}) =>
  <div>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryLine data={history} x='month' y='profit' />
    </VictoryChart>
    <Debug h={history} />
  </div>

export default LineChart
