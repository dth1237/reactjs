import React from "react";
import './Displayinfor.scss'
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
            <div className="Display-infor-container">
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
                            <div> 
                                <button onClick={() => this.props.handledeleteuser(user.id)}>Delete</button>
                            </div>

                    </div>
                    )
                    
               

                })}




             



            </div>}
            </div>
        )
    }
}
export default Displayinfor