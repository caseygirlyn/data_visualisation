import React, { Component } from 'react';
import './App.css';
import Chart1 from './components/Chart1'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getchartData();
  }

  getchartData(){
    this.setState({
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets:[
                {
                    label: 'Population',
                    data:[
                        100,
                        200,
                        300,
                        400,
                        500,
                        600,
                        700,
                        800,
                        900,
                        1000,
                        1100,
                        1200
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(10, 99, 132, 0.6)',
                        'rgba(20, 162, 235, 0.6)',
                        'rgba(40, 206, 86, 0.6)',
                        'rgba(60, 192, 192, 0.6)',
                        'rgba(70, 102, 255, 0.6)'
                    ]
                }
                ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Chart1 legendPosition='top' chartData={this.state.chartData}/>
        
      </div>
    );
  }
}

export default App;
