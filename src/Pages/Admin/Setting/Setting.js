import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form } from 'react-bootstrap'
import Adminwrapper from "../../../Components/AdminWrapper/AdminWrapper"
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";

import "./Setting.scss";

const Setting = () => {

    return (
        <>
            <div className='wrapper'>
                <Adminwrapper />
                <div className='right-sidebar'>
                    <Col className='bg'>
                        <Container>
                            <Row>
                                <Col md={12} >
                                    <div className="tab-col">

                                        <Col className=" box-bg">
                                            <Row className="setting-col ">
                                                <Col md={6}>
                                                    <Input label="Update Add" />
                                                </Col>
                                                <Col md={6}>
                                                    <Input label="Update Comment" />
                                                </Col>
                                            </Row>
                                            <div className="text-right">

                                                <Button text="Submit" />
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </div >
            </div >
        </>
    )

}
export default Setting