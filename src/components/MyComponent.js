//Class compoents
//funcion components

import React from "react";
class MyComponent extends React.Component{
    state = {
        name: `d`,
        age: `20`

    };
    //JSX
    render(){
        return (
            <div> 
                 My name is the {this.state.name} 
            </div>
        );

    }
}

export default MyComponent;
