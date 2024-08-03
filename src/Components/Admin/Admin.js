import { useState } from 'react';
import './Admin.scss'
import Sidebar from "./Sidebar";
import { FaBars } from 'react-icons/fa';

const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}></Sidebar>

            </div>
            <div className="admin-content"></div>
            <FaBars onClick={() => setcollapsed(!collapsed)} />
            Content go here
        </div>

    )
}
export default Admin;