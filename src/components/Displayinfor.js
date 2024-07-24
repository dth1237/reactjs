import React from "react";

class Displayinfor extends React.Component
{
//prop
    state = {
        isshowisuser:true

    }
    handlshowhide =()=>
    {
        this.setState(
        {
            isshowisuser:!this.state.isshowisuser
        })
    }
    render(){
       const{listUser} = this.props;
        return (
            <div>
                <div>
                    <span onClick={()=>{this.handlshowhide()}}> 
                       
                            {this.state.isshowisuser == true ? "Hide list user" : "show user"}</span>
                </div>

          

           
           {this.state.isshowisuser && <div>
                {listUser.map ((user) => {
                    // if (+user.age < 18)
                    
                    return (
                        <div key={user.id} className = {+user.age > 18 ? 'green' : 'red'}>
                           <div> My name is {user.name}</div>
                            <div> My age is {user.age}</div>

                    </div>
                    )
                    
               

                })}




             



            </div>}
            </div>
        )
    }
}
export default Displayinfor