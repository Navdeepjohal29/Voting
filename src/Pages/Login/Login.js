import React, { useState, useEffect } from "react";

import { Col, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Button from "../../Components/Button/Button";
import ConnectWallet from "../../Components/ConnectWallet";
import { useHistory } from 'react-router'

import "./Login.scss";

const Login = () => {

    return (
        <>
            <Col className="page-ath-wrap">

                <Col md={12} className="right-side">
                    <div className="login_form">
                        <div className="page-wth-header">
                            <Link to="/">
                                {" "}
                                <img src={logo} />
                            </Link>
                        </div>
                        <div className="page-ath-form">
                            <ConnectWallet />
                            <Form className="login-form text-center" >
                                <div className="text-center mt-3">
                                    <Button className="bgOrange" text="Login" />
                                </div>

                            </Form>



                        </div>
                    </div>
                </Col>
            </Col>

        </>
    )

}
export default Login