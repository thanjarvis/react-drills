import React, { Component } from "react";
import "./App.css";
import Hooks from './Component/Hooks'

class App extends Component {
  
  render() {
    return (
      <div >
        <Hooks
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW94hai4ci_0xBNwZU6wodVhZbWRtuNWSd2nuvhGYmIsckEqwtQ`}
        />
      </div>
    );
  }
}

export default App;
