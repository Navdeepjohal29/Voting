import React from 'react'
import { Col, Form, Button, Row, Container } from 'react-bootstrap'
import './Home.scss'

import like from '../../assets/images/like.png'
import dislike from '../../assets/images/dislike.png'
import user from '../../assets/images/user.png'
import comment from '../../assets/images/comment.png'
import send from '../../assets/images/send.png'
import Wrapper from '../../Components/Wrapper/Wrapper'

const Declinetab = () => {
    return (
        <>
            <div className='wrapper'>
                <Wrapper />
                <div className='right-sidebar'>


                    <Col className='bg'>
                        <Container>
                            <Row>
                                <Col md={12} >
                                    <div className=" tab-col">

                                        <Col className="live-tab box-bg">
                                            <div className='offer-title  theme-bg'>
                                                <p className='main-title'>
                                                    Offer Done by 0x00035hji000wj123
                                                    <span className='danger decined-btn'>Declined</span>

                                                </p>
                                            </div>
                                            <div className='offer-title  theme-bg'>
                                                <h3>NFT Marketplace</h3>
                                            </div>
                                            <div className='description'>
                                                <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.</p>
                                            </div>
                                            <div className='viewers-col mb-4'>
                                                <img src={like} /> <p> 3234</p>
                                                <img src={dislike} /> <p> 234</p>
                                                <img src={comment} /> <p> 5646</p>

                                            </div>

                                            <div className='offer-title  theme-bg  comment-form'>
                                                <Form.Group className="mb-3 align-items-center">
                                                    <Form.Control type="text" placeholder="Write A Comment" />
                                                    <Button className='submit-btn' variant="primary" type="submit">
                                                        <img src={send} />
                                                    </Button>
                                                </Form.Group>

                                            </div>
                                            <div className='recent-cmnt'>
                                                <p className='cmnt-heading'>Recents Comments</p>
                                                <div className='comment-sec'>
                                                    <img src={user} />
                                                    <div className='cmnt-col'>
                                                        <h4>Olive Yew.
                                                            <span className='time'>Mar 10, 2019 at 2:48</span>
                                                        </h4>
                                                        <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley lorem ipsum is simply dummy text of the printing</p>
                                                    </div>
                                                </div>
                                                <div className='comment-sec'>
                                                    <img src={user} />
                                                    <div className='cmnt-col'>
                                                        <h4>Olive Yew.
                                                            <span className='time'>Mar 10, 2019 at 2:48</span>
                                                        </h4>
                                                        <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley lorem ipsum is simply dummy text of the printing</p>
                                                    </div>
                                                </div>
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

export default Declinetab