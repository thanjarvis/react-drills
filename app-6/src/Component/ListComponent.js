import React, { Component } from "react";

export default class ListComponent extends Component {
    render(){
        // console.log('hey yall')
        return <p>{this.props.task}</p>
    }

}