import { useState } from "react";
import "../assets/css/form.css";
import "../assets/css/button.css";
import "../assets/css/summary-page.css";
import Logo from "../assets/PAYCONSENT.svg"
import axios from "axios";
import FormData from "form-data";
import {useNavigate } from "react-router-dom";
import { useAccount} from 'wagmi';
import {ethers} from "ethers"

const starton = axios.create({
  baseURL: "https://api.starton.io/v3",
  headers:{
	"x-api-key": "sk_live_8a0c2480-a82d-4479-a73b-82fa219360d4", // my actual api key
  }
});

async function uploadFiletoIpfs(file){
  const data = new FormData();
  data.append("file", file, file.name);
  data.append("isSync", true);
  const res = await starton.post("/ipfs/file", data, {
    headers: {
      "x-api-key": "sk_live_8a0c2480-a82d-4479-a73b-82fa219360d4", // my actual api key
      "Content-Type": "multipart/form-data",
    },
  }).then((value) => {
	return (value.data.cid);
  })
}


async function deployContract(type_creator_user, type_other_user, creator_user, other_user, transactionAmount, urls){
	console.log(type_creator_user, type_other_user, creator_user, other_user, transactionAmount, urls);
  const res = await starton.post("/smart-contract/from-bytecode",
	{
		name: "Smart contract Ethan test",
		description: "test 1 from Starton",
		network: "polygon-mumbai",
		signerWallet: "0xEa2F4211CD978848B250DeC10C2521FDD91097a2", // my actual kms wallet
		speed: "fastest",
		bytecode: "60806040523480156200001157600080fd5b5060405162001f9938038062001f998339818101604052810190620000379190620005eb565b604051806060016040528087600181111562000058576200005762000814565b5b81526020016000600381111562000074576200007362000814565b5b81526020018473ffffffffffffffffffffffffffffffffffffffff16815250600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360018111156200010057620000ff62000814565b5b021790555060208201518160000160016101000a81548160ff0219169083600381111562000133576200013262000814565b5b021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506040518060600160405280866001811115620001a357620001a262000814565b5b815260200160006003811115620001bf57620001be62000814565b5b81526020018573ffffffffffffffffffffffffffffffffffffffff16815250600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360018111156200024b576200024a62000814565b5b021790555060208201518160000160016101000a81548160ff021916908360038111156200027e576200027d62000814565b5b021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508160018190555060008060006101000a81548160ff02191690836003811115620002fc57620002fb62000814565b5b02179055508060008151811062000318576200031762000872565b5b6020026020010151600260006002811062000338576200033762000872565b5b0190805190602001906200034e929190620003a9565b508060018151811062000366576200036562000872565b5b6020026020010151600260016002811062000386576200038562000872565b5b0190805190602001906200039c929190620003a9565b505050505050506200093f565b828054620003b790620007a8565b90600052602060002090601f016020900481019282620003db576000855562000427565b82601f10620003f657805160ff191683800117855562000427565b8280016001018555821562000427579182015b828111156200042657825182559160200191906001019062000409565b5b5090506200043691906200043a565b5090565b5b80821115620004555760008160009055506001016200043b565b5090565b6000620004706200046a84620006cf565b620006a6565b90508083825260208201905082856020860282011115620004965762000495620008d5565b5b60005b85811015620004eb57815167ffffffffffffffff811115620004c057620004bf620008d0565b5b808601620004cf8982620005a1565b8552602085019450602084019350505060018101905062000499565b5050509392505050565b60006200050c6200050684620006fe565b620006a6565b9050828152602081018484840111156200052b576200052a620008da565b5b6200053884828562000772565b509392505050565b6000815190506200055181620008fa565b92915050565b600082601f8301126200056f576200056e620008d0565b5b81516200058184826020860162000459565b91505092915050565b6000815190506200059b8162000914565b92915050565b600082601f830112620005b957620005b8620008d0565b5b8151620005cb848260208601620004f5565b91505092915050565b600081519050620005e58162000925565b92915050565b60008060008060008060c087890312156200060b576200060a620008e4565b5b60006200061b89828a016200058a565b96505060206200062e89828a016200058a565b95505060406200064189828a0162000540565b94505060606200065489828a0162000540565b93505060806200066789828a01620005d4565b92505060a087015167ffffffffffffffff8111156200068b576200068a620008df565b5b6200069989828a0162000557565b9150509295509295509295565b6000620006b2620006c5565b9050620006c08282620007de565b919050565b6000604051905090565b600067ffffffffffffffff821115620006ed57620006ec620008a1565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156200071c576200071b620008a1565b5b6200072782620008e9565b9050602081019050919050565b6000620007418262000748565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200079257808201518184015260208101905062000775565b83811115620007a2576000848401525b50505050565b60006002820490506001821680620007c157607f821691505b60208210811415620007d857620007d762000843565b5b50919050565b620007e982620008e9565b810181811067ffffffffffffffff821117156200080b576200080a620008a1565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620009058162000734565b81146200091157600080fd5b50565b600281106200092257600080fd5b50565b620009308162000768565b81146200093c57600080fd5b50565b61164a806200094f6000396000f3fe6080604052600436106100555760003560e01c80632777dc731461005a5780632a43472c146100765780636ccc4965146100a357806379e93bf8146100bf57806393f7d5cf146100e8578063fb7e6e2f14610128575b600080fd5b610074600480360381019061006f919061100d565b610151565b005b34801561008257600080fd5b5061008b61054c565b60405161009a93929190611316565b60405180910390f35b6100bd60048036038101906100b8919061100d565b61056e565b005b3480156100cb57600080fd5b506100e660048036038101906100e1919061100d565b61074b565b005b3480156100f457600080fd5b5061010f600480360381019061010a919061100d565b6109bf565b60405161011f94939291906111b1565b60405180910390f35b34801561013457600080fd5b5061014f600480360381019061014a919061100d565b610b89565b005b600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156102635750600060018111156101ff576101fe6113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166001811115610261576102606113e4565b5b145b6102a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029990611296565b60405180910390fd5b600160038111156102b6576102b56113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff166003811115610318576103176113e4565b5b10610358576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034f90611236565b60405180910390fd5b6001600381111561036c5761036b6113e4565b5b60046000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1660038111156104305761042f6113e4565b5b14610470576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610467906112b6565b60405180910390fd5b60015434146104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ab906111f6565b60405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff0219169083600381111561051a576105196113e4565b5b021790555060016000806101000a81548160ff02191690836003811115610544576105436113e4565b5b021790555050565b60008060004760015460008054906101000a900460ff16925092509250909192565b600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561067f575060018081111561061b5761061a6113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16600181111561067d5761067c6113e4565b5b145b6106be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b590611256565b60405180910390fd5b600260038111156106d2576106d16113e4565b5b60008054906101000a900460ff1660038111156106f2576106f16113e4565b5b14610732576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610729906112f6565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561085c57506001808111156107f8576107f76113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16600181111561085a576108596113e4565b5b145b61089b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089290611256565b60405180910390fd5b600060038111156108af576108ae6113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff166003811115610911576109106113e4565b5b14610951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094890611276565b60405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff021916908360038111156109b7576109b66113e4565b5b021790555050565b600080600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff16600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660046000600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1693509350935093509193509193565b600073ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015610d185750600180811115610c3657610c356113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166001811115610c9857610c976113e4565b5b1480610d17575060006001811115610cb357610cb26113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166001811115610d1557610d146113e4565b5b145b5b610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90611256565b60405180910390fd5b60016003811115610d6b57610d6a6113e4565b5b60008054906101000a900460ff166003811115610d8b57610d8a6113e4565b5b14610dcb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc2906112d6565b60405180910390fd5b60016003811115610ddf57610dde6113e4565b5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff166003811115610e4157610e406113e4565b5b14610e81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7890611216565b60405180910390fd5b6002600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160016101000a81548160ff02191690836003811115610ee757610ee66113e4565b5b021790555060026003811115610f0057610eff6113e4565b5b60046000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff166003811115610fc457610fc36113e4565b5b1415610ff55760026000806101000a81548160ff02191690836003811115610fef57610fee6113e4565b5b02179055505b50565b600081359050611007816115fd565b92915050565b60006020828403121561102357611022611413565b5b600061103184828501610ff8565b91505092915050565b6110438161135e565b82525050565b611052816113c0565b82525050565b611061816113d2565b82525050565b600061107460128361134d565b915061107f82611418565b602082019050919050565b600061109760108361134d565b91506110a282611441565b602082019050919050565b60006110ba601f8361134d565b91506110c58261146a565b602082019050919050565b60006110dd60188361134d565b91506110e882611493565b602082019050919050565b6000611100601e8361134d565b915061110b826114bc565b602082019050919050565b600061112360168361134d565b915061112e826114e5565b602082019050919050565b600061114660268361134d565b91506111518261150e565b604082019050919050565b6000611169602f8361134d565b91506111748261155d565b604082019050919050565b600061118c60198361134d565b9150611197826115ac565b602082019050919050565b6111ab816113b6565b82525050565b60006080820190506111c66000830187611058565b6111d36020830186611049565b6111e0604083018561103a565b6111ed6060830184611049565b95945050505050565b6000602082019050818103600083015261120f81611067565b9050919050565b6000602082019050818103600083015261122f8161108a565b9050919050565b6000602082019050818103600083015261124f816110ad565b9050919050565b6000602082019050818103600083015261126f816110d0565b9050919050565b6000602082019050818103600083015261128f816110f3565b9050919050565b600060208201905081810360008301526112af81611116565b9050919050565b600060208201905081810360008301526112cf81611139565b9050919050565b600060208201905081810360008301526112ef8161115c565b9050919050565b6000602082019050818103600083015261130f8161117f565b9050919050565b600060608201905061132b60008301866111a2565b61133860208301856111a2565b6113456040830184611049565b949350505050565b600082825260208201905092915050565b600061136982611396565b9050919050565b600081905061137e826115d5565b919050565b6000819050611391826115e9565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006113cb82611370565b9050919050565b60006113dd82611383565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600080fd5b7f4973206e6f7420676f6f6420616d6f756e740000000000000000000000000000600082015250565b7f416c72656164792076616c696461746500000000000000000000000000000000600082015250565b7f74686520636f6e74726163742068617320616c7265616479207369676e656400600082015250565b7f596f7520617265206e6f74207468652072656365697665720000000000000000600082015250565b7f74686520636f6e747261637420697320616c7265616479207369676e65640000600082015250565b7f596f7520617265206e6f74207468652073656e64657200000000000000000000600082015250565b7f74686520636f6e7472616374206f66206f746865722073696465206973206e6f60008201527f74207369676e0000000000000000000000000000000000000000000000000000602082015250565b7f53746174757320636f6e7472616374206973206e6f74207369676e206f72206160008201527f6c72656164792076616c69646174650000000000000000000000000000000000602082015250565b7f436f6e7472616374206973206e6f7420636f6d706c6574656400000000000000600082015250565b600481106115e6576115e56113e4565b5b50565b600281106115fa576115f96113e4565b5b50565b6116068161135e565b811461161157600080fd5b5056fea26469706673582212201a8a6bbcb4ad69bf11e24025165a3d316ff525ee4c126db8eef9610b9326354464736f6c63430008070033",
		abi: [
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
		],
		params: [
			String(type_creator_user),
			String(type_other_user),
			String(creator_user),
			String(other_user),
			String(transactionAmount),
      [
		    String(urls[0]),
		    String(urls[1])
      ]
	],
	walletMethod: "kms",
	}
  )
  if (res.request.status  == 201){
	console.log(res.data.smartContract.address);
	return (res.data.smartContract.address);
  } 
  return ("");
}

function FormPage() {
	const [contractInfo, setContractInfo] = useState({
		dest: "",
		amount:"",
    	type_user:2,
	});
	const { address, isConnected } = useAccount();
	const navigate = useNavigate();
  	const urls = [];

  function handleChange(evt) {
		const value = evt.target.value;
		setContractInfo({
			...contractInfo,
			[evt.target.name]: value
		});
	}

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleSubmission = () => {};

  const changeHandler = async (event) => {
    if (event.target.files[0] && event.target.files[1]) {
      urls[0] = uploadFiletoIpfs(event.target.files[0]);
      urls[1] = uploadFiletoIpfs(event.target.files[1]);
	  console.log(urls);
    }
  };

  console.log(urls);
  return (
    <>
	<div>
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
	</div>
      <div className="total-form">
        <form className="form-div-total" onSubmit={handleSubmit}>
          <div className="green-line"></div>
          <div className="form-div">
            <div className="form-div1">
              <div className="title-form">
                <h1>Create a contract</h1>
              </div>
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Status
                  </label>
                  <p className="text-[13px]">Seller or Buyer</p>
                </div>
                <div className="select-box-div">
                  <select className="select-box" onChange={handleChange} value={contractInfo.type_user} name="type_user">
                    <option value="2" disabled>
                      Status
                    </option>
                    <option value="0">Customer</option>
                    <option value="1">Service Provider</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-div2">
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    My Wallet ID
                  </label>
                  <p className="text-[13px]">The creator of this contract</p>
                </div>
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
              </div>
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Subject
                  </label>
                  <p className="text-[13px]">About the contract</p>
                </div>
                <div className="select-box-div">
                  <textarea
                    className="select-box"
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Enter the subject of this contract"
                  ></textarea>
                </div>
              </div>
              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Sending To
                  </label>
                  <p className="text-[13px]">The receiver's wallet adress</p>
                </div>
                <div className="select-box-div">
                  <input
                    className="select-box"
                    id="exampleInput8"
                    placeholder="0x659fc9b0e47d717f78..."
                    onChange={handleChange}
                    value={contractInfo.dest} name="dest"
                  />
                </div>
              </div>
              <div className="status-div-upload">
                <div className="label-status">
                  <label className="status-title">File To Upload</label>
                  <p className="text-[13px]">(Quotation, Specifications ...)</p>
                </div>
                <div>
                  <div className="upload-btn-wrapper">
                    <button className="btn" onClick={handleSubmission}>
                      {urls.length == 2 ? "Files Uploaded" : "Upload a file"}
                    </button>
                    <input
                      onChange={() => changeHandler(event)}
                      type="file"
                      name="myfile"
                      multiple
                    />
                  </div>
                </div>
              </div>

              <div className="status-div">
                <div className="label-status">
                  <label className="status-title">
                    Price
                  </label>
                </div>
                <div className="select-box-div-price">
                  <input
                    className="select-box-price"
                    type="price"
                    id="exampleInput8"
                    placeholder="Price"
                    onChange={handleChange}
                    value={contractInfo.amount} name="amount"
                  />
                  <p className="bnb-tag">MATIC</p>
                </div>
              </div>
            </div>
            <div className="form-div3">
              <div>
				<div className="bg-red-300 pl-3 pr-3 pt-1 pb-1 rounded-[6px]">
					<i className="fa-solid fa-xmark"></i>
				</div>
              </div>
              <div>
                <button className="btn-connexion"
                onClick={async () => {
                  let res;
                  if (contractInfo.type_user == 0)
                    res = await deployContract(0, 1, ethereum.selectedAddress, contractInfo.dest, ethers.utils.parseEther(contractInfo.amount), urls);

                  else
                    res = await deployContract(1, 0, ethereum.selectedAddress, contractInfo.dest, ethers.utils.parseEther(contractInfo.amount), urls);
                  if (res != "")
					navigate("/summary/" + res);
                }}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormPage;