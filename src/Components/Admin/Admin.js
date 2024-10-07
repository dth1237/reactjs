import { useState } from 'react';
import './Admin.scss'
import Sidebar from "./Sidebar";
import { FaBars } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>


    )
}
export default Admin;