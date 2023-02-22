import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../Button/Button";
// import metamask from "../../assets/images/metamask.png";
// import TWT from "../../assets/images/TWT.png";
import { CommonService } from "../../services/CommonService";
import {
    connectUsingWallet,
    disconnectWallet
} from "../../redux/actions/connect.action";
import { useSelector, useDispatch } from "react-redux";
import './connectWallet.scss';


const ConnectWallet = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const walletAddress = useSelector((state) => state.user.walletAddress);
    useEffect(() => {
        setShow(false);
    }, [walletAddress]);
    return (
        <>
            <Button className="login" text={walletAddress ? CommonService.custmizeAddress(walletAddress) : 'Connect'} onClick={handleShow} />

            <Modal className="create-modal" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select a Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="pop_body" onClick={() => dispatch(connectUsingWallet())}>
                        <p>Meta Mask</p>
                        {/* <img src={metamask} alt="" /> */}
                    </div>
                    <div className="pop_body" onClick={() => dispatch(connectUsingWallet())}>
                        <p >Trust Wallet</p>
                        {/* <img src={TWT} alt="" /> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {walletAddress ? <Button className="btnRed" text={'Disconnect'} onClick={() => dispatch(disconnectWallet())} /> : ''}

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ConnectWallet;
