import React, { Component } from "react"; 

export default props => (
    <div className="App-intro" style={{ 
        textAlign: "center",
        backgroundColor: "lightpink",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 400,
        fontSize: 20,
        color: "black"
      }}>
      <p>
        {props.text}
      </p>
      <p>
        {props.text2}
      </p>
      <p>{props.myFunc(21379,1)}</p>
      </div>
    );

export const Body2 = () => (
    <div><div>Hi Body2</div></div>
);

export const Body3 = ()=> (
    <div><div>Hi Body3</div></div>
);
