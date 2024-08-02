
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
     handledeleteuser = (userid)=>
     {
       let listUserfilter = this.state.listUser;

       listUserfilter = listUserfilter.filter(item => item.id !== userid)
       this.setState({
        listUser : listUserfilter
       })



     }
    //JSX
    render() {

        return (
            <div>

                <Adduser handleaddnewuser={this.handleaddnewuser}></Adduser>
              <br></br>
              <Displayinfor listUser={this.state.listUser} 
                            handledeleteuser = {this.handledeleteuser} />


            </div>
        );

    }
}
// const MyComponent = (props) => {
//     const [listUser, setlistUser] = useState(
//         { id: 1, name: 'nnd', age: '16' },
//         { id: 2, name: 'd', age: '26' },
//         { id: 3, name: 'nd', age: '21' }
//     );




//     const handleaddnewuser = (userobj) => {

//         setlistUser([...this.state.listUser, userobj]);

//     }

//     const handledeleteuser = (userid) => {
//         let listUserfilter = listUser;

//         listUserfilter = listUserfilter.filter(item => item.id !== userid)
//         setlistUser(listUserfilter)

//     }


//     return (
//         <div>

//             <Adduser handleaddnewuser={handleaddnewuser}></Adduser>
//             <br></br>
//             <Displayinfor listUser={listUser}
//                 handledeleteuser={handledeleteuser} />


//         </div>
//     );

// }



export default MyComponent;
