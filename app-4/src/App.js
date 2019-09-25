import React, { Component } from "react";
import "./App.css";
import LoginComponent from './Components/LoginComponent'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      // loginButton: true
  }
  }
  

  
  handlePasswordChange = (val) => {
    this.setState({
      password: val
    })
  }


  handleUsernameChange = (val) => {
    this.setState({
      username: val
    })
  }
  sendAlert = (username,password) => {
    console.log('hitting sendAlert')
    window.alert(`Username: ${username} Password: ${password}`)
  }


  render() {
    return (
      <div >
        <LoginComponent
          sendAlert={this.sendAlert}
          username={this.state.username}
          password={this.state.password}
          handlePasswordChange={this.handlePasswordChange}
          handleUsernameChange={this.handleUsernameChange}
          />

      </div>
    )
  }
}

export default App;
