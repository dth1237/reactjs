import React from "react";

class Displayinfor extends React.Component
{
//prop
    render(){
       const{age, name} = this.props;
        return (
            <div>
                <div>
                My name is {this.props.name}
                </div>
                <div>
                My age   {this.props.age}
                 </div>
            </div>
        )
    }
}
export default Displayinfor