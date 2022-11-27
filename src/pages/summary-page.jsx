import React, { useEffect, useState } from "react";
// import { Component } from "react";
import Logo from "../assets/PAYCONSENT.svg";
import axios from "axios";
import "../assets/css/summary-page.css";
import "../assets/css/form.css";
import { useParams } from "react-router-dom";
import { useAccount} from 'wagmi';
// import { useParams } from "react-router-dom";

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
    "x-api-key": "sk_live_1758cdcd-5791-4d9a-990f-d1ca77432081",
  }
});

function StatusContract({status}){
  if (status == 0){
    return (
      <div class="btn-status-progress" type="submit">
        Not Signed
      </div>
    );
  }
  else if (status == 1){
    return (
      <div class="btn-status-progress" type="submit">
        Completed
      </div>    
    );
  }
  else if (status == 2){
    return (
      <div class="btn-status-progress" type="submit">
        Completed
      </div> 
    );
  }
  else{
    return (
      <div class="btn-status-progress" type="submit">
        Completed
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
            <span className="text-[20px]">{amount}</span> MATIC
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
            <span className="text-[20px]">{amount}</span> MATIC
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
            <span className="text-[20px]">{amount}</span> MATIC
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
          <span className="text-[20px]">{amount}</span> MATIC
        </p>
      </div>
    </div>
  }
}

function ButtonStep({user_type, status_os, statusContract}){
  console.log(user_type, status_os, statusContract);
  if (user_type == 0 && statusContract == 0 && status_os == 0){
    return (
      <button className="btn-confirmation" disabled>Wait sign of service provider</button>
    );
  }
  else if (user_type == 0 && statusContract == 0 && status_os == 1){
    return (
      <button className="btn-confirmation">Pay And Sign</button>
    );
  }
  else if (user_type == 1 && statusContract == 0 && status_os == 0){
    return (
      <button className="btn-confirmation">Sign</button>
    );
  }
  else if (user_type == 1 && statusContract == 0 && status_os == 1){
    return (
      <button className="btn-confirmation">Waiting for payment</button>
    );
  }
  else if (statusContract == 1){
    return (
      <button className="btn-confirmation">Validate</button>
    );
  }
}

function SummaryPage() {
  const { address, isConnected } = useAccount();
  // const params = useParams();
  const contractAddress = "0x5a5F706f7Ba2D71e35fb54d1CCBD3993143101d2";
  const [infoUser, setInfoUser] = useState([]);
  const [infoGlob, setInfoGlob] = useState([]);
  const [OS, setOS] = useState();
  const [amount, setAmount] = useState(0);
  const [statusContract,setStatusContract] = useState(3);

  async function getInfo(contractaddress, account){
    const res = await starton.post("/smart-contract/polygon-mumbai/"+contractaddress+"/read",{
      functionName :"getInfoUser",
      params: [
        String(account),
      ],
    },
    ).then((response)=> {
      setInfoUser(response.data.response);
    });
  
    const res2 = await starton.post("/smart-contract/polygon-mumbai/"+contractaddress+"/read",{
      functionName :"getInfoGlobal",
      params: [
      ],
    },
    ).then((response)=> {
      setInfoGlob(response.data.response);
    });
    const res3 = await starton.post("/smart-contract/polygon-mumbai/"+contractaddress+"/read",{
      functionName :"getInfoOtherSide",
      params: [
        String(account),
      ],
    },
    ).then((response)=> {
      setOS(response.data.response);
    });
    const res4 = await starton.post("/smart-contract/polygon-mumbai/"+contractaddress+"/read",{
      functionName :"getAmountTransaction",
      params: [
      ],
    },
    ).then((response)=> {
      setAmount(response.data.response);
    });
    const res5 = await starton.post("/smart-contract/polygon-mumbai/"+contractaddress+"/read",{
      functionName :"getStatusContract",
      params: [
      ],
    },
    ).then((response)=> {
      setStatusContract(response.data.response);
    });
  }

  useEffect(() => {
    getInfo(contractAddress, address);
  },[contractAddress, address])

  return (
    <div className="w-full h-auto overflow-scroll block h-screen background p-4 flex items-center justify-center">
      <p>{contractAddress}</p>
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
                  <StatusContract status={statusContract}></StatusContract>
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
                      <strong className="id-name">{"https://payconsent.com/summary/"+ contractAddress}</strong>
                      <i
                        style={{ cursor: "pointer", marginLeft: 2 }}
                        onClick={() => {
                          navigator.clipboard.writeText("https://payconsent.com/summary/"+ contractAddress);
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
                      <strong className="id-name">{OS}</strong>
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
                <Balance status_contract={statusContract} user_type={infoUser[1]}  amount={amount}></Balance>
              </div>
            </div>
            <div className="form-div3">
              <div>
                <button className="text-[13px]" type="cancel">
                  Cancel
                </button>
              </div>
              <div>
                <ButtonStep statusContract={statusContract} user_type={infoUser[1]} status_os={statusContract}></ButtonStep>
                {/* <button className="btn-confirmation" user_type={infoUser[1]} statusContract={statusContract} status_user={infoUser[2]} amount={amount}>Confirm Contract</button> */}
              </div>
              {/* <div>
                  <div class="btn-status-confirmed" type="submit">
                    Confirmed
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;

// function SummaryPage(){
//   // let params = useParams();

//   return (
//     <div className="w-full h-auto overflow-scroll block h-screen background p-4 flex items-center justify-center">
//       <div className="w-screen ml-[64px] mt-[14px]">
//         <img src={Logo} alt="Logo" className="h-[30px]"/>
//         <p>0xb12312317412409938571</p>
//       </div>
//       {/* <div className="flex items-center justify-center flex-col ">
//         <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600 mb-12">
//           Transaction Summary
//         </div>
//         <div className="box-summary py-6 px-10 sm:max-w-md w-full ">
//           <div className="flex items-center justify-center flex-col">
//             <div className="sm:text-2xl text-xl font-semibold text-center text-gray-900 mb-12">
//               <p>file uploaded: {json.ipfs.file}</p>
//               <p>address: {json.data.address}</p>
//               <p>price: {json.data.price} BNB</p>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <div className="total-form">
//         <div className="form-div-total">
//           <div className="green-line-summary"></div>

//           {/* <div className="green-line"></div> */}
//           <div className="form-div">
//             <div className="form-div1">
//               <div className="title-form">
//                 <h1>Summary</h1>
//               </div>
//               <div className="contract-div">
//                 <div className="label-status">
//                   <p class="status-title">Contract ID</p>
//                 </div>
//                 <div className="wallet-id-total">
//                   <div class="wallet-id-section">
//                     <div className="id-metamask">
//                       <i class="fas fa-hashtag"></i>
//                       <strong className="id-name">{json.ipfs.file}</strong>
//                       <i
//                         style={{ cursor: "pointer", marginLeft: 2 }}
//                         onClick={() => {
//                           navigator.clipboard.writeText(json.ipfs.file);
//                         }}
//                         className="far fa-clone"
//                       ></i>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="form-div1-2">
//               <div className="contract-div">
//                 <div className="label-status">
//                   <p class="status-title">Between</p>
//                   <p className="text-[13px]">The creator of this contract</p>
//                 </div>
//                 <div className="wallet-id-total">
//                   <div>
//                     <i class="fa-solid fa-arrows-rotate"></i>
//                   </div>
//                   <div class="wallet-id-section">
//                     <div className="id-metamask">
//                       <i class="fas fa-hashtag"></i>
//                       <strong className="id-name">{json.data.address}</strong>
//                       <i
//                         style={{ cursor: "pointer", marginLeft: 2 }}
//                         onClick={() => {
//                           navigator.clipboard.writeText(json.data.address);
//                         }}
//                         className="far fa-clone"
//                       ></i>
//                     </div>
//                     <div className="id-metamask">
//                       <i class="fas fa-hashtag"></i>
//                       <strong className="id-name">{json.data.address}</strong>
//                       <i
//                         style={{ cursor: "pointer", marginLeft: 2 }}
//                         onClick={() => {
//                           navigator.clipboard.writeText(user.id_metamask);
//                         }}
//                         className="far fa-clone"
//                       ></i>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="contract-div">
//                   <div className="label-status">
//                     <p class="status-title">Price</p>
//                   </div>
//                   <div className="wallet-id-total">
//                     <p className="bnb-tag">
//                       <span className="text-[20px]">{json.data.price}</span>{" "}
//                       BNB
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="form-div3">
//               <div>
//                 <button className="text-[13px]" type="cancel">
//                   Cancel
//                 </button>
//               </div>
//               <div>
//                 <div class="btn-status-pending" type="submit" /*onClick={() => getInfo(params.contractaddress)}*/>
//                   Pending
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SummaryPage;
