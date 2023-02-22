import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import live from '../../assets/images/live.png'
import decline from '../../assets/images/decline.png'
import approve from '../../assets/images/approve.png'
const Adminsidebar = (props) => {



    return (
        <>
            <div className={`leftbar ${props.show ? 'show' : 'hide'}`}
            >
                <div className='d-flex justify-content-between align-items-center'>
                    <img src={logo} alt='logo' />
                    <h4 onClick={props.handletoggle} className='text-white mb-0'>x</h4>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> <img src={live} /> Live</Link>
                        </li>
                        <li>
                            <Link to="/declined"><img src={decline} />  Thread Decline</Link>
                        </li>
                        <li>
                            <Link to="/approved"><img src={approve} /> Thread Approved</Link>
                        </li>
                        <li>
                            <Link to="/declined"><img src={decline} />   Decline</Link>
                        </li>
                        <li>
                            <Link to="/approved"><img src={approve} />  Approved</Link>
                        </li>
                        <li>
                            <Link to="/pending"><img src={approve} />  Pending</Link>
                        </li>
                    </ul>
                </nav>


            </div>


        </>
    );
}

export default Adminsidebar;