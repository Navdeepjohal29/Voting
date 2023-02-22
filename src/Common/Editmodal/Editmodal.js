import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import user from '../../assets/images/user.png'
import Button from '../../Components/Button/Button'
const Editmodal = (props) => {
    return (
        <>
            <Modal className="create-modal comment-modal    delete-modal" size="lg" show={props.trashshow} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='comment-sec'>
                        <img src={user} alt='img' />
                        <div className='cmnt-col'>
                            <h4>Olive Yew.
                                <span className='time'>Mar 10, 2019 at 2:48</span>
                                <span className='edit-icon'>
                                    <Button className='like-btn' variant="transparent" type="submit"><box-icon name='edit-alt'></box-icon></Button>
                                    <Button onClick={handleTrash} className='like-btn' variant="transparent" type="submit"> <box-icon name='trash'></box-icon></Button>
                                    <Deletemodal trashshow={trashshow} onClose={Close} />
                                </span>
                            </h4>
                            <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley lorem ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}
export default Editmodal