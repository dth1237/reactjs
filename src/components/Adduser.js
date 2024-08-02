import React, { useState } from "react";

// class Adduser extends React.Component
// {
//     state = {
//         name: `d`,
//         age: `20`
const Adduser = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
   




   const handleonchangename = (event) => {
        setName(event.target.value)

    }
    const handleonchangeage = (event) => {
        setAge(event.target.value)
    }





    const handleonsubmit = (event) => {
        event.preventDefault();
        props.handleaddnewuser(
            {
                id: Math.floor((Math.random() * 10) + 1) + '-random',

                name: this.state.name,
                age: this.state.age
            }
        );
    }


    return (

        <div>
            My name is the {name} and I'm {age}

            <form onSubmit={(event) => handleonsubmit(event)}>
                <input type="text"
                    value={name}
                    onChange={(event) => handleonchangename(event)}

                />
                <input type="text"
                    value={age}
                    onChange={(event) => handleonchangeage(event)}

                />

                <button>submit</button>
            </form>
        </div>


    )
}






//     };
//     handelClick = (event) => {
//         console.log("Click me my button ")
//         console.log("random", Math.floor((Math.random() * 100) + 1));


//         this.setState({
//             name: 'dung',
//             age: Math.floor((Math.random() * 100) + 1)
//         })

//     }
//     HandleonMouseover = (event) => {
//         // console.log(event.pageX)
//     }
//     handleonchangename = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleonchangeage = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleonsubmit = (event) => {
//         event.preventDefault();
//         this.props.handleaddnewuser(
//             {
//                 id: Math.floor((Math.random() * 10) + 1) + '-random',

//                  name : this.state.name,
//                  age: this.state.age
//             }
//         );
//     }

//     render(){
//     return(

//         <div>
//             My name is the {this.state.name} and I'm {this.state.age}

//             <form onSubmit={(event) => this.handleonsubmit(event)}>
//                 <input type="text"
//                     value={this.state.name}
//                     onChange={(event) => this.handleonchangename(event)}

//                 />
//                 <input type="text"
//                     value={this.state.age}
//                     onChange={(event) => this.handleonchangeage(event)}

//                 />

//                 <button>submit</button>
//             </form>
//         </div>


//     )
//     }




// }
export default Adduser;