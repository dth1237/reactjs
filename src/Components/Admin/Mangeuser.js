import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modalcreateuser from '../Content/Modalcreateuser';
import './Mangaeuser.scss'



const Manageuser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <button>add new user</button>

            </div>
            <div>
                table user
            </div>
            <Modalcreateuser />


        </div>
    )

}
export default Manageuser