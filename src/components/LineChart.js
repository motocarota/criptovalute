import { VictoryChart, VictoryLine, VictoryAxis } from 'victory'
import React from 'react'

const LineChart = ({ history }) => {
  const convert = history   // for every history row
    .map(row => [row[0], row[1]])  // return only the first two elements
    .reverse() // order from older to newer

  console.log('convert:', convert, 'history: ', history)
  return <div viewBox='0, 0, width, height' width='100%' height='400px' >
    <VictoryChart domainPadding={20}>
      <VictoryAxis tickFormat={(x) => new Date(x).toLocaleDateString()} fixLabelOverlap style={{
        axis: { stroke: '#756f6a' },
        axisLabel: { fontSize: 8, padding: 20 },
        grid: { stroke: (t) => t === 10 ? 'red' : 'grey' },
        ticks: { stroke: 'grey' },
        tickLabels: { fontSize: 8, padding: 5 }
      }} />
      <VictoryLine data={convert} x={0} y={1} />
    </VictoryChart>
  </div>
}

export default LineChart
