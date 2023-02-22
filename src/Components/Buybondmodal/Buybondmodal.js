import React from 'react'
import { Modal } from 'react-bootstrap'
import ButtonOutline from "../Button/ButtonOutline";

import icon from "../../Theme/Assets/metamask.png";
import icon1 from "../../Theme/Assets/TWT.png";
import './Buybondmodal.scss'
const Buybondmodal = (props) => {
    return (
        <>
            <Modal size="lg" show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal_title'>
                        <span className='title-icon'>
                            <img src={icon} alt="" />  <img src={icon1} alt="" />
                        </span>
                        OHM-DAI LP

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal_head text-center'>
                        <p className='mb-0'>Fixed Term</p>
                        <small>1 min</small>
                    </div>
                    <div className='bond_price'>
                        <div className='price'>
                            <label>Bond Price</label>
                            <p>$48.08</p>
                        </div>
                        <div className='price'>
                            <label>Market Price
                            </label>
                            <p>$45.58
                            </p>
                        </div>
                    </div>
                    <ButtonOutline className="bondBtn" text="Connect Wallet"/>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default Buybondmodal