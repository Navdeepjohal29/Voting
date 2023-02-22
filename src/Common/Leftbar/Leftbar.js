import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import live from '../../assets/images/live.png'
import decline from '../../assets/images/decline.png'
import approve from '../../assets/images/approve.png'
import './Leftbar.scss'
const Leftbar = (props) => {



    return (
        <>
            <div className={`leftbar ${props.show ? 'show' : 'hide'}`}
            >
                <div className='d-flex  sidebar-logo align-items-center'>
                    <img src={logo} alt='logo' />
                    <h4 onClick={props.handletoggle} className='text-white mb-0'>x</h4>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName="active" to="/"> <img src={live} /> Live</NavLink>
                        </li>

                        <li>
                            <NavLink to="/declined"><img src={decline} />  Declined</NavLink>
                        </li>
                        <li>
                            <NavLink to="/approved"><img src={approve} /> Approved</NavLink>
                        </li>
                    </ul>
                </nav>


            </div>


        </>
    );
}

export default Leftbar;