//Class compoents
//funcion components

import React from "react";
import Userinfor from "./Adduser";
import Displayinfor from "./Displayinfor";
import Adduser from "./Adduser";
class MyComponent extends React.Component {

    state ={
        listUser : [
            { id: 1 ,name:'nnd' ,age :  '16'},
             { id: 2, name: 'd', age: '26' },
              { id: 3, name: 'nd', age: '21' }
        ]
    }
    handleaddnewuser = (userobj) => {
        this.setState({
            listUser: [...this.state.listUser,userobj]
        })
     }
    //JSX
    render() {

        return (
            <div>

                <Adduser handleaddnewuser={this.handleaddnewuser}></Adduser>
              <br></br>
              <Displayinfor listUser={this.state.listUser} 
                          />


            </div>
        );

    }
}

export default MyComponent;
