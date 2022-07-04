import React, { Component } from "react"; 
import './App.css';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import Body,{Body2,Body3} from "./components/Body";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Imageloder from "./components/Imageloder";
import Vote from "./components/Vote";
import MyForm from "./components/MyForm";
import DogBreeds from "./components/DogBreeds";




class App extends Component{
  // add(a,b){return a+b;}

  state = {
    visible: true
  }

  handleVote = () => {
    <Vote/>
  }

  render() {  
    /*var add = (a,b) => a+b;*/
    let slider = this.state.visible ? (<Imageloder/>) : (<div>This is hidden</div>);

    // if(!this.state.visible){
    //   slider = <div>display nothing</div>;
    // }

    const buttonText = this.state.visible ? 'hide' : 'show';
    
    return(
    <div className="App">
      <h1>His</h1>
    <div  class="col s12">
      <ul style={{backgroundColor: "black"}} class="tabs">
        {/* <li class="tab col s3"><a class="active" href="#test1">VOTE</a></li> */}
        <li class="tab col s3"><a class="active" href="#test2">BREEDS</a></li>
        {/* <li class="tab col s3"><a class="active" href="#test3">IMAGES/SEARCH</a></li>
        <li class="tab col s3"><a class="active" href="#test4">FAVOURITES</a></li>
        <li class="tab col s3"><a class="active" href="#test4">UPLOAD</a></li> */}
      </ul>
    </div>

    
    <div id="test1" class="col s12">{<DogBreeds/>}</div>
  
      {/* <Header title={"Hello Bro"} num={10}
      myArr = {[2,4,6]}
      myFunc = {this.add}
      myObj = {{
        a: 90,
        b: 80
      }}/>

      <Body2/>
      <Body3/>
      <Body text={"are sahi hai bhai ye functional component"} text2={"dekh ye 2nd text"} myFunc={this.add}/>
      <Counter initialCount={0}/>
      <Counter initialCount={10}/> */}

      {/* {slider}

      <button onClick={()=>{
        this.setState({visible: !this.state.visible});
      }}>
        {buttonText}
      </button> */}

      {/* <MyForm/> */}
      
    </div>
  
);
  }
}


export default App;
