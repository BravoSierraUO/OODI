import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()

    this.chart = React.createRef();
  }


  componentDidMount() {
    Tabletop.init({
      key: '1K8Jm3EwrMWenPZ_U6GuUDSaMSKWWtG0yRvqhroapSGg',
      callback: googleData => {
        const children = googleData.map(row => ({
          name: row.thequotenum,
          value: row.thecustnum
        }));

        const data = [
          {
            name: "Ryan tree map",
            children
          }
        ]
        // create a chart and set the data
        const chart = window.anychart.treeMap(data, "as-tree");

        // set the container id
        chart.container("container");

        // initiate drawing the chart
        chart.draw();
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <>
        <div id="container">
          {/* {
            data.map(obj => {
              return (
                <div key={obj.thequotenum} style={mystyle}>
                  <p>{obj.thecustnum}</p>
                  <p>{Math.floor((new Date().getTime() - new Date(obj.ts).getTime()) / (1000 * 60 * 60 * 24))}</p>
                </div>
              )
            })
          } */}
        </div>
      </>
    );
  }
};

export default App;