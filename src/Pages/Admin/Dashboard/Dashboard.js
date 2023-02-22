import React from "react"
import { Col, Row, Container } from 'react-bootstrap'
import Adminwrapper from "../../../Components/AdminWrapper/AdminWrapper"
import Button from '../../../Components/Button/Button'
import ButtonOutline from "../../../Components/Button/ButtonOutline"
import './Dashboard.scss'

const Dashboard = () => {
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

                                        <Col className=" card-box box-bg">
                                            <p>Title Trip to the Azures islands?
                                                <span className="time">1 Days ago</span>
                                            </p>
                                            <div className="box-btn">

                                                <ButtonOutline text="Edit" />

                                                <Button text="Accept" className=' approved-btn' ></Button>
                                                <Button text="Reject" className='danger decined-btn'></Button>
                                                <Button text="Delete" className='danger decined-btn'></Button>


                                            </div>
                                        </Col>
                                        <Col className=" card-box box-bg">
                                            <p>Title Trip to the Azures islands?
                                                <span className="time">1 Days ago</span>
                                            </p>
                                            <div className="box-btn">
                                                <ButtonOutline text="Edit" />

                                                <Button text="Accept" className=' approved-btn' ></Button>
                                                <Button text="Reject" className='danger decined-btn'></Button>
                                                <Button text="Delete" className='danger decined-btn'></Button>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </div>
            </div>
        </>
    )
}
export default Dashboard