import React, { useEffect, useState } from "react";
import './Displayinfor.scss'


const Displayinfor = (props) => {
    const { listUser } = props;
    const [isshowhidelistuser, setshowhidelistuser] = useState(true);
    const handleshowhidelisuser = () => {
        setshowhidelistuser(!isshowhidelistuser)

    }
   

    return (
        <div className="Display-infor-container">
            <div>
                <span onClick={() => handleshowhidelisuser()}>{isshowhidelistuser == true ? 'Hide list user' : 'Show list user'}</span>

            </div>
        

            
            
        
            {isshowhidelistuser && <>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                            <div> My name is {user.name}</div>
                            <div> My age is {user.age}</div>
                            <div>
                                <button onClick={() => props.handledeleteuser(user.id)}>Delete</button>
                            </div>

                        </div>
                    )
                })}
            </>}  
            </div>
 
    )
}
    




export default Displayinfor