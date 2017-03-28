import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({history}) =>
  <div>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryLine data={history} x='month' y='profit' />
    </VictoryChart>
  </div>

export default LineChart
