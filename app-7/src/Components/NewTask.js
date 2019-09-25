import React, { Component } from "react";

export default class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }


    handleInputChange(value){
        this.setState({input: value})
    }

    handleAdd = () => {
        this.props.add(this.state.input);
        this.setState({input: ''})
    }


    render(){
        return(
            <div>
                <input 
                    placeholder='Enter next item'
                    value={this.state.input}
                    onChange={e => this.handleInputChange(e.target.value)}/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

}