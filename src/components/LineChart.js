import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({history}) =>
  <div>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryLine data={history} x='0' y='1' />
    </VictoryChart>
  </div>

export default LineChart
