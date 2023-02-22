import React, { useState } from 'react'
import { Col, Form, Button, Row, Container } from 'react-bootstrap'
import './Home.scss'
import Commentmodal from '../../Components/Commentmodal/Commentmodal'
import like from '../../assets/images/like.png'
import dislike from '../../assets/images/dislike.png'
import user from '../../assets/images/user.png'
import comment from '../../assets/images/comment.png'
import send from '../../assets/images/send.png'
import Wrapper from '../../Components/Wrapper/Wrapper'
import 'boxicons'
import Deletemodal from '../../Common/Deletemodal/Deletemodal'

const Livetab = (props) => {
    const [show, setShow] = useState(false);
    const [trashshow, setDeleteShow] = useState(false);
    const [isEditing, setisEditing] = useState(false);
    const [addclass, setAddClass] = useState();
    const [CommentList, setCommentList] = useState();

    const handleClick = () => {
        setisEditing(true);
        setAddClass(prevState => !prevState)
    }
    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute(setCommentList);
    };
    const Close = () => setDeleteShow(false);
    const handleTrash = () => {
        setDeleteShow(" ");
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                                    Offer Done by 0x00035hji000wj123</p>
                                            </div>
                                            <div className='offer-title  theme-bg'>
                                                <h3>NFT Marketplace</h3>
                                            </div>
                                            <div className='description'>
                                                <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.</p>
                                            </div>
                                            <div className='viewers-col mb-4'>
                                                <Button className='like-btn' variant="transparent" type="submit"> <img src={like} alt='img' />
                                                </Button>
                                                <p> 3234</p>
                                                <Button className='like-btn' variant="transparent" type="submit"><img src={dislike} alt='img' /> </Button><p> 234</p>
                                                <img onClick={handleShow} src={comment} alt='img' /> <p> 5646</p>
                                                <Commentmodal show={show} onHide={handleClose} />

                                            </div>

                                            <div className='offer-title  theme-bg  comment-form'>
                                                <Form.Group className="mb-3 align-items-center">
                                                    <Form.Control type="text" placeholder="Write A Comment" />
                                                    <Button className='submit-btn' variant="primary" type="submit">
                                                        <img src={send} alt='img' />
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
                                                            <span className='edit-icon'>
                                                                <Button onClick={handleClick} className='like-btn' variant="transparent" type="submit"><box-icon name='edit-alt'></box-icon></Button>
                                                                <Button onClick={handleTrash} className='like-btn' variant="transparent" type="submit"> <box-icon name='trash'></box-icon></Button>
                                                                <Deletemodal trashshow={trashshow} onClose={Close} Ondelete={handleRemoveItem} />
                                                            </span>
                                                        </h4>


                                                        <textarea

                                                            className={addclass ? "edit textarea-comment" : "textarea-comment"}
                                                            disabled={isEditing ? false : true}


                                                        >
                                                            lorem ipsum is simply dummy text of the
                                                            printing and typesetting industry. lorem
                                                            ipsum has been the industry's standard dummy
                                                            text ever since the 1500s, when unknown printer
                                                            took a gallery lorem ipsum is simply dummy text of the printing
                                                        </textarea>

                                                    </div>
                                                </div>
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

export default Livetab