import React from "react";

class Adduser extends React.Component
{
    state = {
        name: `d`,
        age: `20`

    };
    handelClick = (event) => {
        console.log("Click me my button ")
        console.log("random", Math.floor((Math.random() * 100) + 1));


        this.setState({
            name: 'dung',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }
    HandleonMouseover = (event) => {
        // console.log(event.pageX)
    }
    handleonchangename = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleonchangeage = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleonsubmit = (event) => {
        event.preventDefault();
        this.props.handleaddnewuser(
            {
                id: Math.floor((Math.random() * 10) + 1) + '-random',

                 name : this.state.name,
                 age: this.state.age
            }
        );
    }

    render(){
    return(
          
        <div>
            My name is the {this.state.name} and I'm {this.state.age}

            <form onSubmit={(event) => this.handleonsubmit(event)}>
                <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleonchangename(event)}

                />
                <input type="text"
                    value={this.state.age}
                    onChange={(event) => this.handleonchangeage(event)}

                />

                <button>submit</button>
            </form>
        </div>


    )
    }


   

}
export default Adduser;