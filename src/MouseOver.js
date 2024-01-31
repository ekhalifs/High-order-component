import React, { Component } from "react";
import HOC from "./HOC";

class MouseOver extends Component{
    render(){
        const {count, increament} = this.props;
        return(
           <p onMouseOver={increament}> Hovered {count} times</p>
        )
    }
}

export default HOC(MouseOver);