import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({history}) => {
  const convert = history   // for every history row
  .map(row => row[0])     // return only the first element
  .map(ts => new Date(ts))  // convert it to date
  .map(date => date.toLocaleString())  // pretty output
  // console.log(convert
  // .map(str => str.replace(/[^\w\s]/gi, ''))  removes special characters
  // )
  console.log(new Date().getDate())
  return <div>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryLine data={history} x={convert} y='1' />
    </VictoryChart>
  </div>
}

export default LineChart
