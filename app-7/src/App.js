import React, { Component } from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from "./Components/List";
import Todo from "./Components/Todo";


class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
    
  }
  
  handleAddTask = (task) => {
    this.setState({list: [...this.state.list, task]})
  }
  
  
  
  
  render() {
    return (
      <div>
        <h1>My to-do list</h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.list}/>
        <Todo/>
      </div>
    );
  }
}

export default App;
