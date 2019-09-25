import React, {Component} from 'react';

export default class ImageComponent extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                <img src={this.props.url}/>
            </div>
        )
    }

}