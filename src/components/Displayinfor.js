import React from "react";

class Displayinfor extends React.Component
{
//prop
    render(){
       const{listUser} = this.props;
       console.log(listUser);
        return (
            <div>
                {listUser.map ((user) => {
                    return (
                        <div key={user.id}>
                           <div> My name is {user.name}</div>
                            <div> My age is {user.age}</div>

                    </div>
                    )
                    

                })}




                {/* <div>
                My name is {this.props.name}
                </div>
                <div>
                My age   {this.props.age}
                 </div> */}



            </div>
        )
    }
}
export default Displayinfor