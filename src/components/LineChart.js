import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import React from 'react'

class LineChart extends React.Component {
    render(){
const data = [
    {month: "September", profit: 35000, loss: 2000},
    {month: "October", profit: 42000, loss: 8000},
    {month: "November", profit: 55000, loss: 5000}
  ] 

return(

    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryLine data={data} x="month" y={(datum) => datum.profit - datum.loss} />   
    </VictoryChart>
)
    }
}

export default LineChart

