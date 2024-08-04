import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modalcreateuser from '../Content/Modalcreateuser';




const Manageuser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-contennt">
                <button>add new user</button>

            </div>
            <div>
                table user
                <Modalcreateuser />
            </div>

        </div>
    )

}
export default Manageuser