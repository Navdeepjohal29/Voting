import Web3 from "web3";
import { COMT_TOKEN_CONTRACT, CVP_TOKEN_CONTRACT, VOTING_CONTRACT } from "../../constant";
import dynamicAbi from '../../abis/DynamicAbi.json';
import votingAbi from '../../abis/VotingAbi.json';

/**
 * Variable declarations
 */
let web3Instance, dynamicTokenComtInstance, dynamicTokenCvpInstance, votingContractInstance;
/**
 * End of variable declarations
 */

const instanceInit = async () => {
    try {
        const { ethereum } = window;
        web3Instance = new Web3(ethereum);

        //dynamic comt instance
        dynamicTokenComtInstance = new web3Instance.eth.Contract(dynamicAbi, COMT_TOKEN_CONTRACT);
        //dynamic cvp instance
        dynamicTokenCvpInstance = new web3Instance.eth.Contract(dynamicAbi, CVP_TOKEN_CONTRACT);
        //voting contract instance
        votingContractInstance = new web3Instance.eth.Contract(votingAbi, VOTING_CONTRACT);
    } catch (err) {
        console.error('Error under instanceInit ', err);
    }
};
//init instance handler
instanceInit();



//Instance for CVP token contract
const tokenCvpContractInstanceHandler = async (walletType) => {
  try {
    if (walletType === "MetaMask") {
      let initInstance = await new Web3(window.ethereum);
      return await new initInstance.eth.Contract(
        dynamicAbi,
        CVP_TOKEN_CONTRACT
      );
    } else if (walletType === "BinanceWallet") {
      let initInstance = await new Web3(window.BinanceChain);
      return await new initInstance.eth.Contract(
        dynamicAbi,
        CVP_TOKEN_CONTRACT
      );
    }else if (walletType === "TrustWallet") {
      let initInstance = await new Web3(window.ethereum);
      return await new initInstance.eth.Contract(
        dynamicAbi,
        CVP_TOKEN_CONTRACT
      );
    } else {
      if (votingContractInstance) {
        return votingContractInstance;
      }
    }
  } catch (err) {
    console.log("Error on tokenCvpContractInstanceHandler", err);
    throw new Error("Error on tokenCvpContractInstanceHandler");
  }
};



//Instance for COMT token contract
const tokenComtContractInstanceHandler = async (walletType) => {
  try {
    if (walletType === "MetaMask") {
      let initInstance = await new Web3(window.ethereum);
      return await new initInstance.eth.Contract(
        dynamicAbi,
        COMT_TOKEN_CONTRACT
      );
    } else if (walletType === "BinanceWallet") {
      let initInstance = await new Web3(window.BinanceChain);
      return await new initInstance.eth.Contract(
        dynamicAbi,
        COMT_TOKEN_CONTRACT
      );
    }else if (walletType === "TrustWallet") {
      let initInstance = await new Web3(window.ethereum);
      return await new initInstance.eth.Contract(
        dynamicAbi,
        COMT_TOKEN_CONTRACT
      );
    } else {
      if (votingContractInstance) {
        return votingContractInstance;
      }
    }
  } catch (err) {
    console.log("Error on tokenComtContractInstanceHandler", err);
    throw new Error("Error on tokenComtContractInstanceHandler");
  }
};



//Instance for COMT token contract
const votingContractInstanceHandler = async (walletType) => {
  try {
    if (walletType === "MetaMask") {
      let initInstance = await new Web3(window.ethereum);
      return await new initInstance.eth.Contract(
        votingAbi,
        VOTING_CONTRACT
      );
    } else if (walletType === "BinanceWallet") {
      let initInstance = await new Web3(window.BinanceChain);
      return await new initInstance.eth.Contract(
         votingAbi,
        VOTING_CONTRACT
      );
    }else if (walletType === "TrustWallet") {
      let initInstance = await new Web3(window.ethereum);
      return await new initInstance.eth.Contract(
         votingAbi,
        VOTING_CONTRACT
      );
    } else {
      if (votingContractInstance) {
        return votingContractInstance;
      }
    }
  } catch (err) {
    console.log("Error on votingContractInstanceHandler", err);
    throw new Error("Error on votingContractInstanceHandler");
  }
};



export const ContractInstanceHandler = {
	tokenCvpContractInstanceHandler,
    tokenComtContractInstanceHandler,
    votingContractInstanceHandler
};
