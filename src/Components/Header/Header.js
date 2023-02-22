import React, { useState, useEffect } from "react";
import "./Header.scss";
import ConnectWallet from "../ConnectWallet"
import { Container, Row } from "react-bootstrap";
import ButtonOutline from "../Button/ButtonOutline";
import Createmodal from "../Createmodal/Createmodal";
import setting from '../../assets/images/settings.png'
import logo from '../../assets/images/mobile-logo.png'
import usericon from '../../assets/images/user-icon.png'
import { getTokenBalanceServiceAction, getCreationFeeAction } from "../../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { COMT_TOKEN_CONTRACT, CVP_TOKEN_CONTRACT } from "../../constant";

const Header = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [creationFee, setCreationFee] = useState(0);
  const [userCOMTBalance, setUserCOMTBalance] = useState("");
  const [comtTokenDecimals, setComtTokenDecimals] = useState("");


  const user = useSelector((state) =>
    state.user.walletAddress ? state.user : false
  );
  useEffect(() => {
    onInit();
  }, []);
  const onInit = async () => {
    if (user) {
      //get COMT token details based on user
      const comtTokenInfo = await dispatch(
        getTokenBalanceServiceAction(user.wallet, {
          tokenAddress: COMT_TOKEN_CONTRACT,
          walletAddress: user.walletAddress
        })
      );
      // get CVP token details based on user
      // const cvpTokenInfo = await dispatch(
      //   getTokenBalanceServiceAction(user.wallet,{
      //     tokenAddress: CVP_TOKEN_CONTRACT,
      //     walletAddress:user.walletAddress
      //   })
      // );
      if (comtTokenInfo) {
        //get project creation fee
        const proposalCreationFee = await dispatch(
          getCreationFeeAction(user.wallet)
        );
        if (proposalCreationFee) {
          setCreationFee(proposalCreationFee / comtTokenInfo?.tokenDecimals);
        }
        //set user comt balance
        setUserCOMTBalance(comtTokenInfo?.tokenBalance / comtTokenInfo?.tokenDecimals);
        setComtTokenDecimals(comtTokenInfo?.tokenDecimals);
      }
    }

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="topheader">
      <Container>
        <Row>
          <div className="mainHeader">
            <div className="logo d-flex">
              <img onClick={props.handletoggle} src={logo} />
              <p>Project</p>
            </div>

            {props.type === 'admin' ?
              <div className="btnDiv admin-header d-flex">
                <p className="setting-label"><img src={setting} /> Settings</p>
                <span className="user-icon"> <img src={usericon} /></span>
              </div>
              : <div className="btnDiv">
                <ButtonOutline onClick={handleShow} text="Create" />
                <Createmodal show={show}
                  onHide={handleClose}
                  userComtBalance={userCOMTBalance}
                  creationFee={creationFee}
                  comtTokenDecimals={comtTokenDecimals}
                />
                <ConnectWallet />
              </div>
            }

          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
