import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    Tabletop.init({
      key: '1K8Jm3EwrMWenPZ_U6GuUDSaMSKWWtG0yRvqhroapSGg',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
        <div id="employee-details">
          {
            data.map(obj => {
              return (
                <div key={obj.thequotenum} style={mystyle}>
                  <p>{obj.thecustnum}</p>
                  <p>{Math.floor((new Date().getTime() - new Date(obj.ts).getTime()) / (1000 * 60 * 60 * 24))}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
};
//var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();    //Future date - current date
//var daysTill30June2035 = Math.floor(msDiff / (1000 * 60 * 60 * 24));
//console.log(daysTill30June2035);
export default App;