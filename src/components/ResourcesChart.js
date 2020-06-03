import React, { Component } from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2';


export default class ResourcesChart extends Component {
    constructor(props){
        super(props);
        this.state={
        chartData:{
        labels: ["Google Search", "Moodle", "YouTube"],
        datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
            }
        }
    }
    
    render() {
        return (
            <div className="chart">
                <Pie
            data={this.state.chartData}
            options={{
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                  },
                  legend: {
                    display: true
                  },
                  cutoutPercentage: 80,

                 }}
            />
                        </div>
        )
    }
}
