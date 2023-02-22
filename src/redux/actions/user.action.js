import {
	PLATFORM,
	USER_THEME,
} from "../constant/actionTypes";
import { toast } from "../../Components/Toast/Toast";
import {
	getAllowanceInfo,
	getCreationFeeMethod,
	getTokenBalanceService,
	makeProposalMethod,
	setApprovalForCreateThreadMethod
} from "../../services/common/CommonMethodService";
import { setLoader } from "./loader";

export const setUserPlatform = (platform) => async (dispatch, getState) => {
	try {
		dispatch({ type: PLATFORM, payload: platform });
	} catch (error) {
		return toast.error(error.message);
	}
};

export const setUserTheme = (theme) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_THEME, payload: theme });
	} catch (error) {
		return toast.error(error.message);
	}
};


export const getTokenBalanceServiceAction = (walletType, data) => async (dispatch, getState) => {
	try {
		dispatch(setLoader(true));
		let result = await getTokenBalanceService(walletType, data);
		dispatch(setLoader(false));
		return result;
	} catch (error) {
		//return toast.error(error.message);
		dispatch(setLoader(false));
	}
}

/**
 * Action to get proposal creation fee
 * @param {*} walletType
 * @returns
 */
export const getCreationFeeAction = (walletType) => async (dispatch) => {
	try {
		dispatch(setLoader(true));
		let result = await getCreationFeeMethod(walletType);
		dispatch(setLoader(false));
		return result;
	} catch (error) {
		//return toast.error(error.message);
		dispatch(setLoader(false));
	}
};

/**
 * Action to create proposal thread
 * @param {*} walletType
 * @param {*} data
 * @returns
 */

export const makeProposalAction = (walletType, data) => async (dispatch) => {
	try {
		dispatch(setLoader(true));
		let result = await makeProposalMethod(walletType, data);
		dispatch(setLoader(false));
		return result;
	} catch (error) {
		//return toast.error(error.message);
		dispatch(setLoader(false));
		return toast.error(error.message);
	}
}

/**
 * Action to get allowance
 * @param {*} walletType
 * @param {*} data
 * @returns
 */

export const toGetAllowanceInfoAction = (walletType, data) => async (dispatch) => {
	try {
		dispatch(setLoader(true));
		let result = await getAllowanceInfo(walletType, data);
		dispatch(setLoader(false));
		return result;
	} catch (error) {
		//return toast.error(error.message);
		dispatch(setLoader(false));
		return toast.error(error.message);
	}
}

/**
 * Action to set approval
 * @param {*} walletType
 * @param {*} data
 * @returns
 */

export const toSetApprovalForCreateThreadAction = (walletType, walletAddress) => async (dispatch) => {
	try {
		dispatch(setLoader(true));
		let result = await setApprovalForCreateThreadMethod(walletType, walletAddress);
		dispatch(setLoader(false));
		return result;
	} catch (error) {
		//return toast.error(error.message);
		dispatch(setLoader(false));
		return toast.error(error.message);
	}
}