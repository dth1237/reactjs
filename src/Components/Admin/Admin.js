import { useState } from 'react';
import './Admin.scss'
import Sidebar from "./Sidebar";
import { FaBars } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";


const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}></Sidebar>

            </div>
            <div className="admin-content">

                <div className='admin-header'>
                    <FaBars onClick={() => setcollapsed(!collapsed)} />


                </div>
                <div className='admin-main'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    )
}
export default Admin;