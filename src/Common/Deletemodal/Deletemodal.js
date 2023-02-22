import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import user from '../../assets/images/user.png'
import Button from '../../Components/Button/Button'
import ButtonOutline from '../../Components/Button/ButtonOutline'

import './Deletemodal.scss'
const Deletemodal = (props) => {
    return (
        <>
            <Modal className="create-modal comment-modal    delete-modal" size="lg" show={props.trashshow} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='comment-sec justify-content-center'>
                        <div className='cmnt-col text-center'>
                            <h3>Are you sure want to delete this</h3>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <ButtonOutline onClick={props.onClose} text="Close" />
                    <Button text="Delete" onClick={props.handleRemoveItem} />

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Deletemodal