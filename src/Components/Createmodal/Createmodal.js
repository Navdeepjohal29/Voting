import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import "./Createmodal.scss";
import { toast } from "../Toast/Toast";
import { CommonService } from "../../services/CommonService";
import { apiCallPost } from "../../services/axios";
import { API_HOST, COMT_TOKEN_CONTRACT } from "../../constant";
import { PROPOSAL_CREATE_ENDPOINT } from "../../constants/apiEndPoint";
import {
	makeProposalAction,
	toGetAllowanceInfoAction,
	toSetApprovalForCreateThreadAction,
} from "../../redux/actions/user.action";

const Createmodal = (props) => {
	//console.log('props :>> ', props);
	const dispatch = useDispatch();
	const user = useSelector((state) =>
		state.user.walletAddress ? state.user : false
	);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	// const [commitment, setCommitment] = useState("");
	const [durationInDays, setDurationInDays] = useState("");

	/**
	 * handlers block
	 */
	const createProposalHandler = async (e) => {
		try {
			e.preventDefault();
			if (!user) {
				return toast.error("Please connect to the wallet.");
			}
			//check if user has required balance of COMT token
			if (props?.userComtBalance < props?.creationFee) {
				return toast.error(
					`You need minimum balance of ${props?.creationFee} COMT to create proposal `
				);
			}
			//check for allowance
			const checkAllowance = await dispatch(
				toGetAllowanceInfoAction(user.wallet, {
					walletAddress: user.walletAddress,
					address: COMT_TOKEN_CONTRACT,
				})
			);
			if (Number(checkAllowance) <= 0) {
				//set approval
				await dispatch(
					toSetApprovalForCreateThreadAction(user.wallet, user.walletAddress)
				);

			} else {
				//set proposal data
				const data = {};
				data.title = name;
				data.description = description;
				data.commitment = CommonService.convertWithDecimal(
					props?.creationFee,
					props?.comtTokenDecimals
				);
				data.duration = CommonService.getMilliseconds(durationInDays);
				data.creator_wallet_address = user.walletAddress;
				if (data) {
					let makeProposalApi = await apiCallPost(
						API_HOST + PROPOSAL_CREATE_ENDPOINT,
						data
					);
					if (makeProposalApi.status == 200) {
						//contract interaction
						const sendToVotingContract = await dispatch(
							makeProposalAction(user.wallet, {
								id: makeProposalApi.data,
								duration: data.duration,
								walletAddress: user.walletAddress,
							})
						);
						if (sendToVotingContract && sendToVotingContract.status) {
							setName("");
							setDescription("");
							setDurationInDays("");
							props.onHide();
							toast.success("Proposal created successfully");
						}
					} else {
						toast.error(`Error ${makeProposalApi.message}`);
					}
				}
			}

		} catch (err) {
			console.error("Error under createProposalHandler", err);
			//toast.error("Something went wrong while creating proposal");
		}
	};
	/**
	 * END handlers
	 */

	return (
		<>
			<Modal className="create-modal" show={props.show} onHide={props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>
						Create Proposal
						{/* <p className='proposa-add'>0x386c930y2hue7b7f9c8</p> */}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form
						className="offer-title  theme-bg  comment-form"
						onSubmit={(e) => createProposalHandler(e)}
					>
						<Form.Group className="mb-4 align-items-center">
							<label>Name</label>
							<Form.Control
								type="text"
								placeholder="Eg  Aryan Khana "
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-4 align-items-center">
							<label>Description</label>
							<Form.Control
								type="text"
								placeholder="More than 50 words "
								value={description}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-4 align-items-center">
							<label>Commitment Required</label>
							<Form.Control
								readOnly
								type="text"
								placeholder="100000 COMT "
								defaultValue={props?.creationFee}
							/>
						</Form.Group>
						<Form.Group className="mb-4 align-items-center">
							<label>Duration In Days</label>
							<Form.Control
								type="text"
								placeholder="2 Days"
								value={durationInDays}
								onChange={(e) => {
									let result = CommonService.allowOnlyNumber(e.target.value);
									if (result == true) {
										setDurationInDays(e.target.value);
									}
								}}
							/>
						</Form.Group>
						<Button className="w-100 modal-btn" text="Create" type="submit" />
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default Createmodal;
