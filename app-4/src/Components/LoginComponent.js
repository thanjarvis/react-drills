import React, {Component} from 'react';
import App from '../App';


export default class LoginComponent extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        console.log('hey yall')
        return(
            <div>
                <input
                    onChange={(e) => this.props.handleUsernameChange(e.target.value)}/>
                <input
                    onChange={(e) => this.props.handlePasswordChange(e.target.value)}/>
                <button
                 onClick={()=> {this.props.sendAlert(this.props.username, this.props.password)}}
                 >Login</button>
            </div>
       )
    }
}

