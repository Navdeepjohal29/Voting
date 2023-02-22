import React, { useState } from "react";
import Adminsidebar from "../../Common/Adminsidebar/Adminsidebar";
import Header from "../Header/Header";


const Adminwrapper = (props) => {
    const [show, setShow] = useState(false);

    const handletoggle = () => {

        setShow(!show)
    }
    return (
        <>
            <Adminsidebar show={show} handletoggle={handletoggle} />
            <div className='right-sidebar'>
                <Header type="admin" handletoggle={handletoggle} />
            </div>
        </>
    )

}
export default Adminwrapper