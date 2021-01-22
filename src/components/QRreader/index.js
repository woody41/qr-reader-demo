import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
//import "@material/card";
//import card.core-styles;

class QRreader extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this);
  }
  handleError(err){
    console.error(err)
  }


  handleScan(data){
    this.setState({
      result: data,
    })
    this.props.handleReader(this.state.result);
    console.log(this.props.runComponent);
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
      </div>
    )
  }
}

export default QRreader;
