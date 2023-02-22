import React, { useState, useEffect } from "react";
import Leftbar from "../../Common/Leftbar/Leftbar";
import Header from "../Header/Header";


const Wrapper = () => {
    const [show, setShow] = useState(false);

    const handletoggle = () => {

        setShow(!show)
    }
    return (
        <>
            <Leftbar show={show} handletoggle={handletoggle} />
            <div className='right-sidebar'>
                <Header handletoggle={handletoggle} />
            </div>
        </>
    )

}
export default Wrapper