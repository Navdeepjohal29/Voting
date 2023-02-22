import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import user from '../../assets/images/user.png'

const Commentmodal = (props) => {
    return (
        <>
            <Modal className="create-modal comment-modal" size="lg" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='recent-cmnt'>
                        <div className='comment-sec'>
                            <img src={user} alt='img' />
                            <div className='cmnt-col'>
                                <h4>Olive Yew.
                                    <span className='time'>Mar 10, 2019 at 2:48</span>
                                    <span className='edit-icon'><box-icon name='edit-alt'></box-icon>
                                        <box-icon name='trash'></box-icon>
                                    </span>
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
                </Modal.Body>

            </Modal>
        </>
    )
}
export default Commentmodal