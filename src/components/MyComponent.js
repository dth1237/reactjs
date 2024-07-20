//Class compoents
//funcion components

import React from "react";
class MyComponent extends React.Component {
    state = {
        name: `d`,
        age: `20`

    };
    handelClick(event) {
        console.log("Click me my button ")
        console.log("My name is" , this.state.name);

    }
    HandleonMouseover(event) {
        console.log(event.pageX)

    }
    //JSX
    render() {
        return (
            <div>
                My name is the {this.state.name}
                <button onClick={this.handelClick}>click me</button>
                <button onMouseOver={this.HandleonMouseover}>over</button>
            </div>
        );

    }
}

export default MyComponent;
