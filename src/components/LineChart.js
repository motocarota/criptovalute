import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({ history }) => {
  const convert = history   // for every history row
    .map(row => [row[0], row[1], row[2]])  // return only the first two elements
    .reverse() // order from older to newer

  console.log('convert:', convert, 'history: ', history)
  return <div viewBox='0, 0, width, height' width='100%' height='400px' >
    <VictoryChart domainPadding={20} scale='time' theme={VictoryTheme.material} >
      <VictoryAxis tickFormat={(x) => new Date(x).toLocaleDateString()} />
      <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1}`)} />
      <VictoryLine data={convert} x={0} y={2} />
    </VictoryChart>
  </div>
}

export default LineChart
