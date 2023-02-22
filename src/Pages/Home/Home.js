import React from 'react'
import Header from '../../Components/Header/Header'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import './Home.scss'
import Livetab from './Livetab'
import Declinetab from './Declinetab'
import Approvetab from './Approvetab'
import Leftbar from '../../Common/Leftbar/Leftbar'
const Home = () => {
    return (
        <>
            <div className='wrapper'>
                <Leftbar />
                <div className='right-sidebar'>
                    <Header />

                    <Col className='bg'>
                        <Container>
                            <Row>
                                <Col md={12} >
                                    <div className=" tab-col">
                                        {/* <Livetab />
                                        <Declinetab />
                                        <Approvetab /> */}
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
export default Home