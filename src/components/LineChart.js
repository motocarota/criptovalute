import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({ history }) => {
  const convert = history // for every history row
    .map(row => [row[0], row[1], row[2]]) // return only the first two elements
    .reverse() // order from older to newer

  console.log('convert:', convert, 'history: ', history)
  return (
    <div viewBox='0, 0, width, height' width='100%' height='400px'>
      <VictoryChart
     //   domainPadding={20}
        scale='time'
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickFormat={x => new Date(x).toLocaleDateString()}
          style={{
            axis: { stroke: '#fff', opacity: 0.7 },
            axisLabel: { fontSize: 16, padding: 20 },
            grid: { stroke: '#a0a0a0', opacity: 0.2 },
            ticks: { stroke: '#fff', opacity: 0.7 },
            tickLabels: { fontSize: 10, padding: 5, fill: '#fff' }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x / 1}`}
          style={{
            axis: { stroke: '#fff', opacity: 0.7 },
            axisLabel: { fontSize: 16, padding: 20 },
            grid: { stroke: '#a0a0a0', opacity: 0.2 },
            ticks: { stroke: '#fff', opacity: 0.7 },
            tickLabels: { fontSize: 10, padding: 5, fill: '#fff' }
          }}
        />
        <VictoryLine
          data={convert}
          x={0}
          y={2}
          style={{
            data: { stroke: '#fff' },
            labels: { fontSize: 12 },
            parent: { border: '1px solid #ccc' }
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default LineChart
