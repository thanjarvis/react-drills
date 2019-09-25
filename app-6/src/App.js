import React, { Component } from "react";
import "./App.css";
import ListComponent from './Component/ListComponent'

class App extends Component {
  constructor(){
    super()
    this.state ={
      list: [],
      item: ""
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }
 
 
 handleItemChange(val) {
   this.setState({
     item: val
   })
 }
 
 handleAddItem () {
   this.setState({
     list: [...this.state.list, this.state.item],
     item: ''
   })
 }
 
  render() {
    let list =this.state.list.map((e, i) => {
      return <ListComponent key={i} task={e}/>
    });
    return (
      <div className='App' >
        <h1>My to-do list:</h1>
        <div>
          <input
            placeholder='New task'
            value={this.state.item}
            onChange={e => this.handleItemChange(e.target.value)}/>
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <br/>
        {list}
        
      </div>
    );
  }
}

export default App;
