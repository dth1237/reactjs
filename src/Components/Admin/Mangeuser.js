import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modalcreateuser from '../Content/Modalcreateuser';
import './Mangaeuser.scss'
import { FcPlus } from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';



const Manageuser = (props) => {
    const[show, setshow] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className='btn-add '> 

              
                    <button className='btn btn-primary' onClick={()=> setshow(true)}> <FcPlus /> Add new user</button>

                </div>
            </div>
            <div className='table-user-container'>
                table user
            </div>
            <Modalcreateuser show={show}
                setShow={setshow}/>


        </div>
    )

}
export default Manageuser