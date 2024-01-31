import React, { Component } from "react";
import HOC from "./HOC";

class Increament extends Component{
    render(){
        const {count, increament} = this.props;
        return(
            <button onClick={increament}>Clicked {count} times</button>
        )
    }
}

export default HOC(Increament);