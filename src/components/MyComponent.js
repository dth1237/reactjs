//Class compoents
//funcion components

import React from "react";
class MyComponent extends React.Component {
    state = {
        name: `d`,
        age: `20`

    };
    handelClick = (event) => {
        console.log("Click me my button ")
        console.log("random", Math.floor((Math.random() *100) +1));


        this.setState({
            name: 'dung',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }
    HandleonMouseover = (event) => {
        // console.log(event.pageX)


    }
    //JSX
    render() {
        return (
            <div>
                My name is the {this.state.name}
                <button onClick={(event) => this.handelClick(event)}>click me</button>
                <button onMouseOver={this.HandleonMouseover}>over</button>
            </div>
        );

    }
}

export default MyComponent;
