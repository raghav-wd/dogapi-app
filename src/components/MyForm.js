import React, { Component } from "react";

export default class MyForm extends Component{

    state = {
        name: "",
        tx: "",
        ck: false
    };

    handlenameChange = (event) =>{
        this.setState({name: event.target.value});
    };

    handletxChange = (event) => {
        this.setState({tx: event.target.value});
    };

    handleCheck = (event) => {
        this.setState({ck: event.target.checked});
    }

    render() {
      return(
        <div>
            <input value={this.state.name} onChange={this.handlenameChange}/>
            <textarea value={this.state.tx} onChange={this.handletxChange}/>
            <input type={"checkbox"} checked={this.state.ck} onChange={this.handleCheck}/>
        </div>
    
  );
}}