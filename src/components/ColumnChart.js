import React from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from 'victory'


class ColumnChart extends React.Component {
    render(){
       const data= [
           {x: 1,y: 30},
           {x: 2,y: 19},
           {x: 3,y: 2},
           {x: 4,y: 200}
        ]
        return(
             <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
               <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["1", "2", "3", "4"]} />
               <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
               <VictoryBar data={data}/>             
            </VictoryChart> 

        )
    }
}

export default ColumnChart