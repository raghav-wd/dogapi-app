import React, { Component } from "react"; 
import logo from '../logo.svg';

export default class Header extends Component{
    render() {  
      return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
          <div>{this.props.num}</div>
          <div>{this.props.myFunc(5,8)}</div>
          <div>{JSON.stringify(this.props.myObj)}</div>
          <div>{this.props.myArr[1]}</div>
        </header>
    
  );
}}