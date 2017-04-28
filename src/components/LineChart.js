import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({history}) => {
  const convert = history   // for every history row
  .map(row => row[0])     // return only the first element
  .map(ts => new Date(ts))  // convert it to date
  .map(date => date.toLocaleString())  // pretty output

  console.log('convert:', convert)
  return <div>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryLine data={history} x='0' y='1' />
    </VictoryChart>
  </div>
}

export default LineChart
