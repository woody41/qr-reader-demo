import './App.css';
import QRreader from './components/QRreader';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      runScanner: true
    };

  }

  handleReader = e => {

    if(this.state.runScanner) { //check if we should to scan
      if(e != null && e.length > 0) { //test of incoming data for length
        this.setState({result: e}); //loaded readed QR
        this.setState({runScanner: false}); //disable reading QR
        //value just loaded
      } else {
        //omitting, value already loaded
      }
    }
  }

  render() {
    return (
      <div>
        <QRreader handleReader={this.handleReader} result={this.state.result} runComponent={this.state.runScanner}></QRreader>
        Value: { this.state.result }
      </div>
    );
  }
};
