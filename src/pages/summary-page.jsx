import React, { useEffect, useState } from "react";
// import { Component } from "react";
import Logo from "../assets/PAYCONSENT.svg";
import axios from "axios";
import "../assets/css/summary-page.css";
import "../assets/css/form.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAccount} from 'wagmi';
import { useContractWrite , usePrepareContractWrite} from 'wagmi'
// import { useParams } from "react-router-dom";
import { ethers } from "ethers";

const json = {
  data: {
    price: "2.7",
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  },
  ipfs: {
    file: "https://payconsent.com/form/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  },
};

const starton = axios.create({
  baseURL: "https://api.starton.io/v3",
  headers:{
    "x-api-key": "sk_live_8a0c2480-a82d-4479-a73b-82fa219360d4", // my actual api key
  }
});

function StatusContract({status}){
  if (status == 0){
    return (
      <div class="btn-status-pending" type="submit">
        In progress
      </div>
    );
  }
  else if (status == 1){
    return (
      <div class="btn-status-progress" type="submit">
        Both part signed
      </div>    
    );
  }
  else if (status == 2){
    return (
      <div class="btn-status-claimed" type="submit">
        Completed
      </div> 
    );
  }
  // else if (status == 3){
  //   return (
  //     <div class="btn-status-claimed" type="submit">
  //       Claimed
  //     </div> 
  //   );
  // }
  else{
    return (
      <div class="btn-status-progress" type="submit">
        Loading...
      </div>    
    );
  }
}

function Balance({status_contract, user_type, amount}){
  if (status_contract == 0 && user_type == 0){
    return(
      <div className="contract-div">
        <div className="label-status">
          <p class="status-title">Amount to Pay</p>
        </div>
        <div className="wallet-id-total">
          <p className="bnb-tag">
            <span className="text-[20px]">{ethers.utils.formatEther(amount)}</span> MATIC
          </p>
        </div>
      </div>
    );
  }
  else if (status_contract == 0 && user_type == 1){
    return(
      <div className="contract-div">
        <div className="label-status">
          <p class="status-title">Amount to Receive</p>
        </div>
        <div className="wallet-id-total">
          <p className="bnb-tag">
            <span className="text-[20px]">{ethers.utils.formatEther(amount)}</span> MATIC
          </p>
        </div>
      </div>
    );
  }
  else if (status_contract == 1){
      <div className="contract-div">
        <div className="label-status">
          <p class="status-title">Balance of Contract</p>
        </div>
        <div className="wallet-id-total">
          <p className="bnb-tag">
            <span className="text-[20px]">{ethers.utils.formatEther(amount)}</span> MATIC
          </p>
        </div>
      </div>
  }
  else if (status_contract == 2){
    <div className="contract-div">
      <div className="label-status">
        <p class="status-title">Balance of Contract</p>
      </div>
      <div className="wallet-id-total">
        <p className="bnb-tag">
          <span className="text-[20px]">{ethers.utils.formatEther(amount)}</span> MATIC
        </p>
      </div>
    </div>
  }
}

const abi_test = [
	{
		"inputs": [
			{
				"internalType": "enum PayConsent.user_type",
				"name": "t_creator_user",
				"type": "uint8"
			},
			{
				"internalType": "enum PayConsent.user_type",
				"name": "t_other_user",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "creator_user",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "other_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_transactionAmount",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "_urls",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pers",
				"type": "address"
			}
		],
		"name": "ClaimMoney",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pers",
				"type": "address"
			}
		],
		"name": "ValidateContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInfoGlobal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "enum PayConsent.status",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pers",
				"type": "address"
			}
		],
		"name": "getInfoUser",
		"outputs": [
			{
				"internalType": "enum PayConsent.user_type",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "enum PayConsent.status",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "enum PayConsent.status",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pers",
				"type": "address"
			}
		],
		"name": "payAndSign",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pers",
				"type": "address"
			}
		],
		"name": "signContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

async function sign(account, contractaddress){
  console.log(account);
  const res = await starton.post("/smart-contract/polygon-mumbai/"+contractaddress+"/call",{
    functionName :"signContract",
    signerWallet: "0xEa2F4211CD978848B250DeC10C2521FDD91097a2", // my actual starton wallet
    params: [
      String(account),
    ],
    speed: "average",
  },
  ).then((response)=> {
    if (response.status == 201)
      window.location.reload(false);
  });
}

function PayAndSign({account, amount, contractaddress}){
  const { config } = usePrepareContractWrite({
    address: contractaddress,
    abi: abi_test,
    functionName: 'payAndSign',
    args:[account],
    overrides: {
      from: String(account),
      value: amount,
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
 
  if (isSuccess){
    window.location.reload(false);
  }
  return (
    <button className="btn-confirmation" disabled={!write} onClick={() => {
      if (!isLoading && !isSuccess)
        write();
    }}>{isLoading ? 'Loading...' : 'Pay And Sign'}</button>
  );
}

function Validate({account, contractaddress}){
  const { config } = usePrepareContractWrite({
    address: contractaddress,
    abi: abi_test,
    functionName: 'ValidateContract',
    args:[account],
    overrides: {
      from: String(account),
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
 
  if (isSuccess){
    window.location.reload(false);
  }
  console.log(account);
  return (
    <button className="btn-confirmation" disabled={!write} onClick={() => {
      if (!isLoading && !isSuccess)
        write();
    }}>{isLoading ? 'Loading...' : 'Validate'}</button>
  );
}

function Claim({account, contractaddress, amount}){
  const navigate = useNavigate();
  const { config } = usePrepareContractWrite({
    address: contractaddress,
    abi: abi_test,
    functionName: 'ClaimMoney',
    args:[account],
    overrides: {
      from: String(account),
      value: amount,
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
 
  if (isSuccess){
    navigate("/");
  }
  console.log(account);
  return (
    <button className="btn-confirmation" disabled={!write} onClick={() => {
      if (!isLoading && !isSuccess)
        write();
    }}>{isLoading ? 'Loading...' : 'Get Money'}</button>
  );
}

function ButtonStep({user_type, status_os, statusContract, amount, contractaddress, account}){
  console.log(user_type, status_os, statusContract);
  if (user_type == 0 && statusContract == 0 && status_os == 0){
    return (
      <button className="btn-confirmation" disabled>Waiting for service provider to sign</button>
    );
  }
  else if (user_type == 0 && statusContract == 0 && status_os == 1){
    return (
      <PayAndSign account={account} contractaddress={contractaddress} amount={amount}></PayAndSign>
      // <button className="btn-confirmation" onClick={() => payAndSign(account, amount, contractaddress)}>Pay And Sign</button>
    );
  }
  else if (user_type == 1 && statusContract == 0 && status_os == 0){
    return (
      <button className="btn-confirmation" onClick={() => sign(account, contractaddress)}>Sign</button>
    );
  }
  else if (user_type == 1 && statusContract == 0 && status_os == 1){
    return (
      <button className="btn-confirmation">Waiting for payment</button>
    );
  }
  else if (statusContract == 1){
    return (
      <Validate account={account} contractaddress={contractaddress}></Validate>
    );
  }
  else if (statusContract == 2 && user_type == 0){
    return (
      <button className="btn-confirmation">CONTRACT COMPLETED</button>
    );
  }
  else if (statusContract == 2 && user_type == 1){
    return (
      <Claim account={account} contractaddress={contractaddress} amount={amount}></Claim>
    );
  }
}

function SummaryPage() {
  const { address, isConnected } = useAccount();
  const params = useParams();
  const [view, setView] = useState(false);
  const [infoUser, setInfoUser] = useState([]);
  const [infoGlob, setInfoGlob] = useState([]);
  const [infoOU, setInfoOU] = useState([]);

  const navigate = useNavigate();

  async function getInfo(contractaddress, account){
    console.log(contractaddress, account);
    const res = await starton.post("/smart-contract/polygon-mumbai/"+params.contractaddress+"/read",{
      functionName :"getInfoUser",
      params: [
        String(account),
      ],
    },
    ).then(async (response)=> {
      setInfoUser(response.data.response);
        const res3 = await starton.post("/smart-contract/polygon-mumbai/"+params.contractaddress+"/read",{
          functionName :"getInfoUser",
          params: [
            String(response.data.response[2]),
          ],
        },
        ).then((response)=> {
          setInfoOU(response.data.response);
        });
    });
  
    const res2 = await starton.post("/smart-contract/polygon-mumbai/"+params.contractaddress+"/read",{
      functionName :"getInfoGlobal",
      params: [
      ],
    },
    ).then((response)=> {
      setInfoGlob(response.data.response);
    });

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setView(true);
    }, 5000);
    getInfo(params.contractaddress, address);
    return () => clearTimeout(timer);
  },[params.contractaddress, address])

  return (
    <>
      <nav className="flex flex-row justify-between align-center mt-[4vh] ml-[8vw] mr-[8vw]">
        <img src={Logo} onClick={() => navigate('/connected')} alt="Logo"/>
        <div className="select-box-div">
                  <div className="wallet-id-total">
                    <div className="wallet-id-section">
                      <div className="id-metamask-form">
                        <i className="fas fa-hashtag"></i>
                        <strong className="id-name">{address}</strong>
                        <i
                          style={{ cursor: "pointer", marginLeft: 2 }}
                          onClick={() => {
                            navigator.clipboard.writeText(address);
                          }}
                          className="far fa-clone"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
	    </nav>
    <div className="w-full h-auto overflow-scroll block h-screen background p-4 flex items-center justify-center">
      <p>{params.contractaddress}</p>
      {/* <div className="flex items-center justify-center flex-col ">
          <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600 mb-12">
          Transaction Summary
          </div>
          <div className="box-summary py-6 px-10 sm:max-w-md w-full ">
          <div className="flex items-center justify-center flex-col">
          <div className="sm:text-2xl text-xl font-semibold text-center text-gray-900 mb-12">
          <p>file uploaded: {json.ipfs.file}</p>
          <p>address: {json.data.address}</p>
          <p>price: {json.data.price} BNB</p>
          </div>
          </div>
          </div>
        </div> */}

      <div className="total-form">
        <div className="form-div-total">
          <div className="green-line-summary"></div>

          {/* <div className="green-line"></div> */}
          <div className="form-div">
            <div className="form-div1">
              <div className="title-form">
                <h1>Summary</h1>
                <div>
                  <StatusContract status={infoGlob[2]}></StatusContract>
                </div>
              </div>
              <div className="contract-div">
                <div className="label-status">
                  <p class="status-title">Link To Share</p>
                  <p className="text-[13px]">To the customer</p>
                </div>
                <div className="wallet-id-total">
                  <div class="wallet-id-section">
                    <div className="id-metamask">
                      <strong className="id-name">{"https://payconsent.com/summary/"+ params.contractaddress}</strong>
                      <i
                        style={{ cursor: "pointer", marginLeft: 2 }}
                        onClick={() => {
                          navigator.clipboard.writeText("https://payconsent.com/summary/"+ params.contractaddress);
                        }}
                        className="far fa-clone"
                        ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-div1-2">
              <div className="contract-div">
                <div className="label-status">
                  <p class="status-title">Between</p>
                  <p className="text-[13px]">The creator of this contract</p>
                </div>
                <div className="wallet-id-total">
                  <div>
                    <i class="fa-solid fa-arrows-rotate"></i>
                  </div>
                  <div class="wallet-id-section">
                    <div className="id-metamask">
                      <i class="fas fa-hashtag"></i>
                      <strong className="id-name">{address}</strong>
                      <i
                        style={{ cursor: "pointer", marginLeft: 2 }}
                        onClick={() => {
                          navigator.clipboard.writeText(address);
                        }}
                        className="far fa-clone"
                        ></i>
                    </div>
                    <div className="id-metamask">
                      <i class="fas fa-hashtag"></i>
                      <strong className="id-name">{infoUser[2]}</strong>
                      <i
                        style={{ cursor: "pointer", marginLeft: 2 }}
                        onClick={() => {
                          navigator.clipboard.writeText(user.id_metamask);
                        }}
                        className="far fa-clone"
                        ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contract-div">
                <div className="label-status">
                  <p class="status-title">Quotation</p>
                  {/* <p className="text-[13px]">IPFS link</p> */}
                </div>
                <button className="wallet-id-total">
                  <div class="wallet-id-section">
                    <div className="id-ipfs">
                      <p>IPFS Link</p>
                      <i class="fa-solid fa-link"></i>
                    </div>
                  </div>
                </button>
              </div>

              <div className="contract-div">
                <div className="label-status">
                  <p class="status-title">Specifications</p>
                  {/* <p className="text-[13px]">IPFS link</p> */}
                </div>
                <button className="wallet-id-total">
                  <div class="wallet-id-section">
                    <div className="id-ipfs">
                      <p>IPFS Link</p>
                      <i class="fa-solid fa-link"></i>
                    </div>
                  </div>
                </button>
              </div>

              {/* <div className="contract-div">
                  <div className="label-status">
                  <p class="status-title">File 2</p>
                  <p className="text-[13px]">IPFS link</p>
                  </div>
                  <div className="wallet-id-total">
                  
                  <div class="wallet-id-section">
                  <div className="id-metamask">
                  <i class="fas fa-hashtag"></i>
                  <strong className="id-name">{json.data.address}</strong>
                  <i
                  style={{ cursor: "pointer", marginLeft: 2 }}
                  onClick={() => {
                    navigator.clipboard.writeText(json.data.address);
                  }}
                  className="far fa-clone"
                  ></i>
                  </div>
                  
                  </div>
                  </div>
                </div> */}

              <div>
                <Balance status_contract={infoGlob[2]} user_type={infoUser[0]}  amount={infoGlob[1]}></Balance>
              </div>
            </div>
            <div className="form-div3">
              <div>
                <div className="bg-red-300 pl-3 pr-3 pt-1 pb-1 rounded-[6px]">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div>
                <ButtonStep statusContract={infoGlob[2]} user_type={infoUser[0]} status_os={infoUser[3]} amount={infoGlob[1]} contractaddress={params.contractaddress} account={address}></ButtonStep>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default SummaryPage;