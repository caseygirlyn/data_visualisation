import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

export class Chart1 extends Component {
  constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }

    render() {
        return(
            <div className="chart1">
            <Bar
                data={this.state.chartData} 
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text: 'Bar Graph',
                        fontSize: 25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                }}
            />
        </div>
        )
  }
}

export default Chart1
