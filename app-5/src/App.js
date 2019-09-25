import React, { Component } from "react";
import "./App.css";
import ImageComponent from "./Component/ImageComponent";

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }




  render() {
    return (
      <div >
        <ImageComponent image={'https://miro.medium.com/max/1000/1*lh3KnrDElUK9jV-lMs4bIg.jpeg'}/>
      </div>
    );
  }
}

export default App;
