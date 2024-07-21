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
    handleonchange = (event)=>
    {
        this.setState ({
            name: event.target.value
        })
    }
    handleonsubmit = (event)=>
    {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                My name is the {this.state.name} and I'm {this.state.age}
               
               <form onSubmit = {(event) => this.handleonsubmit(event)}>
                <input type = "text"
                onChange = {(event) => this.handleonchange(event)}
                
                />
                    <button>submit</button>
                </form>
               

     
            </div>
        );

    }
}

export default MyComponent;
