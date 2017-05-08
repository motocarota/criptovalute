import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'

const LineChart = ({history}) => {
  const convert = history   // for every history row
  .map(row => [row[0], row[1]])     // return only the first two elements
  .map(ts => [new Date(ts[0]), ts[1]])  // convert it to date
  .map(date => [date[0].toLocaleString(), date[1]])  // pretty output
  .map(nd => [nd[0].substring(0, nd[0].indexOf(',')), nd[1]]) // mantein only date format dd/mm/yyyy

  console.log('convert:', convert, 'history: ', history)
  return <div>
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryLine data={convert} x='0' y='1' />
    </VictoryChart>
  </div>
}

export default LineChart
