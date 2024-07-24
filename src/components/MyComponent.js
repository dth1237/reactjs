//Class compoents
//funcion components

import React from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";
class MyComponent extends React.Component {

    //JSX
    render() {
        const myinfor=['a', 'b' ,'c']
        return (
            <div>

              <Userinfor></Userinfor>
              <br></br>
              <Displayinfor name='nnd' age =  '26' />
              <hr></hr>
                <Displayinfor name='d' age='16' myinfor={myinfor} />


            </div>
        );

    }
}

export default MyComponent;
