//Class compoents
//funcion components

import React from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";
class MyComponent extends React.Component {

    state ={
        listUser : [
            { id: 1 ,name:'nnd' ,age :  '16'},
             { id: 2, name: 'd', age: '26' },
              { id: 3, name: 'nd', age: '21' }
        ]
    }
    //JSX
    render() {

        return (
            <div>

              <Userinfor></Userinfor>
              <br></br>
              <Displayinfor listUser={this.state.listUser} />


            </div>
        );

    }
}

export default MyComponent;
