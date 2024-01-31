import React, { Component } from "react";

const HOC = (WrappedComponent) =>{
    class hOC extends Component{
        constructor(props){
            super(props)
            this.state = {
                count:0
            }
        }
        increament =() =>{
            this.setState((prevState) =>({
                count: prevState.count+1
            }))
        }
        render(){
            return(
                <WrappedComponent count={this.state.count} increament={this.increament}/>
            )
        }
    }
    return hOC;
}
export default HOC;