import { ContractInstanceHandler } from './InstanceService';
import Web3 from "web3";
import {RPC_URL, VOTING_CONTRACT } from '../../constant';
import dynamicAbi from '../../abis/DynamicAbi.json';
import BigNumber from 'big-number/big-number';

/**
 * Method to get COMT or CVP token symbol, decimals & balance
 * @param {*} walletType
 * @param {*} data
 * @returns
 */
export const getTokenBalanceService = async (walletType, data) => {
  let tokenDecimals, tokenBalance, tokenSymbol;
  return new Promise(async (resolve, reject) => {
    try {
      let instance, contract;
      if (walletType === "MetaMask") {
        instance = new Web3(window.ethereum);
        contract = new instance.eth.Contract(
          dynamicAbi,
          data.tokenAddress
        );
      } else if (walletType === "BinanceWallet") {
        instance = new Web3(RPC_URL);
        contract = new instance.eth.Contract(
          dynamicAbi,
          data.tokenAddress
        );
      } else if (walletType === "TrustWallet") {
        instance = new Web3(window.ethereum);
        contract = new instance.eth.Contract(
          dynamicAbi,
          data.tokenAddress
        );
      }
       tokenBalance = await contract.methods
        .balanceOf(data.walletAddress)
        .call();
        tokenDecimals = await contract.methods.decimals().call();
        tokenSymbol = await contract.methods.symbol().call();
        tokenDecimals = 10 ** tokenDecimals;
      data = {
        tokenBalance,
        tokenDecimals,
        tokenSymbol,
      };
      resolve(data);
    } catch (error) {
      console.error("Error on getTokenBalanceService", error);
      reject(error);
    }
  });
};


/**
 * Method to get creation fee
 * @param {*} walletType
 * @returns
 */
export const getCreationFeeMethod = async(walletType) => {
  return new Promise(async (resolve, reject) => {
    try {
      const votingContractInstance = await ContractInstanceHandler.votingContractInstanceHandler(walletType);
       let data = await votingContractInstance.methods
        .threadCreationFees()
        .call();
        resolve(data);
    } catch (error) {
      console.error("Error on getCreationFeeMethod", error);
      reject(error);
    }
  });
};

/**
 * Method to make proposal
 * @param {*} walletType
 * @param {*} data
 * @returns
 */
export const makeProposalMethod = async (walletType, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const votingContractInstance = await ContractInstanceHandler.votingContractInstanceHandler(walletType);
      let gas = await votingContractInstance.methods
        .createThread(data.id, data.duration)
        .estimateGas({ from: data.walletAddress });
      await votingContractInstance.methods
        .createThread(data.id, data.duration)
        .send({ from: data.walletAddress, gas })
        .on("confirmation", () => { })
        .then((res) => {
          resolve(res);
        });
    } catch (error) {
      console.error("Error on makeProposalMethod", error);
      reject(error);
    }
  });
};


/**
 * Method to provide approval
 * @param {*} walletType
 * @param {*} data
 * @returns
 */
export const setApprovalForCreateThreadMethod = async (walletType, walletAddress) => {
  return new Promise(async (resolve, reject) => {
    try {
      let contractAddress,maxlimit, limit, approval;
      maxlimit = BigNumber(10).power(40);
      limit = maxlimit.toString();
      const comtTokenContractInstance = await ContractInstanceHandler.tokenComtContractInstanceHandler(walletType);
      contractAddress = VOTING_CONTRACT;
       let gas = await comtTokenContractInstance.methods
        .approve(contractAddress, limit)
        .estimateGas({ from: walletAddress });
      approval = await comtTokenContractInstance.methods
        .approve(contractAddress, limit)
        .send({ from: walletAddress, gas });
      resolve(approval);
    } catch (error) {
      console.error("Error on setApprovalForCreateThreadMethod", error);
      reject(error);
    }
  });
};


/**
 * Method to get allowance
 * @param {*} walletType
 * @param {*} data
 * @returns
 */
export const getAllowanceInfo = async (walletType, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let contractAddress,web3Instance,instance;
        if (walletType === "MetaMask") {
          instance = new Web3(window.ethereum);
          web3Instance = new instance.eth.Contract(
            dynamicAbi,
            data.address
          );
        } else if (walletType === "BinanceWallet") {
          instance = new Web3(RPC_URL);
          web3Instance = new instance.eth.Contract(
            dynamicAbi,
            data.address
          );
        } else if (walletType === "TrustWallet") {
          instance = new Web3(window.ethereum);
          web3Instance = new instance.eth.Contract(
            dynamicAbi,
            data.address
          );
        }
      contractAddress = VOTING_CONTRACT;
      let allowance = await web3Instance.methods
        .allowance(data.walletAddress, contractAddress)
        .call();
      resolve(allowance);
    } catch (error) {
      console.error("Error on getAllowanceInfo", error);
      reject(error);
    }
  });
};
