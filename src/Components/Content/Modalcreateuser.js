import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ModalHeader } from "react-bootstrap";
import { FcPlus } from 'react-icons/fc'
import { toast } from 'react-toastify';

import { postcreatuser } from '../Services/apiService'
const Modalcreateuser = (props) => {
    const { show, setShow } = props;
    const handleClose = () => {
        setShow(false)
        setemail('')
        setpassword('')
        setrole('USER')
        setimage('')
        setpreviewimage('')


    };
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [role, setrole] = useState("USER");

    const [image, setimage] = useState("");
    const [previewimage, setpreviewimage] = useState("");
    const handleuploadimage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setpreviewimage(URL.createObjectURL(event.target.files[0]));
            setimage(event.target.files[0])
        }
        else {
            setpreviewimage("");
        }

    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handlesubmid = async () => {
        const isinavalidemail = validateEmail(email)
        if (!isinavalidemail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }
        let res = await postcreatuser(email, password, username, role, image);
        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM);

        }



    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email}
                            onChange={(event) => setemail(event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                            value={password}
                            onChange={(event) => setpassword(event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username}
                            onChange={(event) => setusername(event.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select id="inputState" className="form-select"
                            onChange={(event) => setrole(event.target.value)}
                        >
                            <option selected value='USER'>USER</option>
                            <option selected value='ADMIN'>ADMIN</option>

                        </select>
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label label-upload" htmlFor='labelUpload'> <FcPlus /> Up load file Image</label>

                        <input type='file' id='labelUpload' hidden
                            onChange={(event) => handleuploadimage(event)}

                        />

                    </div>
                    <div className='code-md-12 img-review'>
                        {previewimage ?
                            <img src={previewimage} />
                            :
                            <span>Preview image</span>
                        }
                        <img />

                    </div>


                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handlesubmid()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modalcreateuser
