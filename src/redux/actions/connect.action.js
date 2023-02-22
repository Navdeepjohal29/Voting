import Web3 from "web3";
import { USER_ADDRESS, USER_WALLET, NETWORK } from "../constant/actionTypes";
import { toast } from "../../Components/Toast/Toast";
import { NETWORK_CHAIN_ID } from "../../constant";
import { switchNetwork } from "../../services/common/CustomNetworkService";
import { Web3Service } from "../../services/common/web3.service";

/**
 * Function to check if required wallets installed
 * @param {*} type
 * @returns
 */
const isWalletInstalled = async (type) => {
	const { BinanceChain, web3, ethereum } = window;
	let result = false;
	if (type === "METAMASK") {
		const isInstalled = Boolean(ethereum && ethereum.isMetaMask);
		if (isInstalled) {
			result = type;
		}
	} else if (type === "BINANCE") {
		const isInstalled = Boolean(
			BinanceChain && (await BinanceChain.isConnected())
		);
		if (isInstalled) {
			result = type;
		}
	}
	if (result === "BINANCE") {
		return "BINANCE_WALLET";
	} else if ("METAMASK") {
		return "METAMASK_WALLET";
	} else if (ethereum || web3 || BinanceChain) {
		return "TRUST_WALLET";
	}
};

/**
 * Function to connect to desired wallet
 * @returns
 */
export const connectUsingWallet = (type) => async (dispatch) => {
	const installed = await isWalletInstalled(type);
	try {
		if (installed) {
			const { ethereum, BinanceChain } = window;
			let web3Instance = new Web3(ethereum);
			const chainId = await web3Instance.eth.getChainId();

			if (chainId !== Number(NETWORK_CHAIN_ID)) {
				const response = await switchNetwork();
				if (response) {
					alert("Binance network added successfully.Please connect now.");
				}
			} else {
				let address;
				if (installed === "METAMASK_WALLET") {
                    address = await Web3Service.getAccount(type);
                   await  dispatch({ type: USER_WALLET, payload: "MetaMask" });
					await ethereum.on("accountsChanged", async function (accounts) {
						address = accounts[0];
						 dispatch({ type: USER_ADDRESS, payload: address });
						window.location.reload();
                    });
                    return dispatch({ type: USER_ADDRESS, payload: address });
				} else if (installed === "BINANCE_WALLET") {
                     address = await Web3Service.getAccount(type);
                    await dispatch({ type: USER_WALLET, payload: "BinanceWallet" });
					await BinanceChain.on("accountsChanged", async function (accounts) {
						address = accounts[0];
					    dispatch({ type: USER_ADDRESS, payload: address });
						window.location.reload();
                    });
                    return dispatch({ type: USER_ADDRESS, payload: address });
				} else if (installed === "TRUST_WALLET") {
					const check = Boolean(
						(ethereum && ethereum.isMetaMask) || BinanceChain
					);
					if (!check) {
						const web3 = await new Web3(window.web3.currentProvider);
						const accounts = await web3.eth.getAccounts();
						address = accounts[0];
						dispatch({ type: USER_WALLET, payload: "TrustWallet" });
						 dispatch({ type: USER_ADDRESS, payload: address });
						window.location.reload();
					}
                } else {
		            	return toast.error("Please select desired wallet");
                }
			}

		} else {
			return toast.error("Please install appropriate wallet");
		}
	} catch (error) {
		return toast.error(error.message);
	}
};

export const connectTrustWallet = () => async (dispatch, getState) => {
	try {
		const { ethereum } = window;
		const result = Boolean(ethereum && ethereum.isMetaMask);
		if (!result) {
			const web3 = await new Web3(window.web3.currentProvider);
			const accounts = await web3.eth.getAccounts();
			let address = accounts[0];
			dispatch({ type: USER_ADDRESS, payload: address });
			return dispatch({ type: USER_WALLET, payload: "TrustWallet" });
		} else {
			return toast.error("Trust Wallet Not installed!");
		}
	} catch (error) {
		return toast.error(error.message);
	}
};

export const disconnectWallet = () => async (dispatch, getState) => {
	try {
		 dispatch({ type: USER_WALLET, payload: "" });
		 dispatch({ type: USER_ADDRESS, payload: "" });
		return toast.success("Disconnected successfully!");
	} catch (error) {
		return toast.error(error.message);
	}
};

export const setNetworkChnageAction = (type) => async (dispatch, getState) => {
	try {
		dispatch({ type: NETWORK, payload: type });
	} catch (error) {
		return toast.error(error.message);
	}
};
