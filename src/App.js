import './App.css';
import QRreader from './components/QRreader';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer/';
import React from 'react';
import { Button, Container } from '@material-ui/core';


export default class App extends React.Component {
    constructor() {
      super();
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <Footer></Footer>
            </div>
        );
    }
};
