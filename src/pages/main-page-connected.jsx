import ConnectButton2 from "../components/connect-button-2.jsx";
import Logo from "../assets/PAYCONSENT.svg";
import abstractV2 from "../assets/images/Abstract-v2.png";
import "../assets/css/form.css";
import "../assets/css/button.css";
import "../assets/css/summary-page.css";
import { useAccount} from 'wagmi';
import "../pages/access-contract.jsx";

import { useNavigate } from "react-router-dom";

// import WalletID from "../components/wallet-id.jsx";

function MainPageConnected() {
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  
  return (
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
      <div className="relative h-[92.4vh] left-[5vh] overflow-hidden flex flex-row content-center justify-between items-center flex-nowrap">
        <div className="absolute left-[10vw]">
			<div className="pb-[4vh]">
				<h1 className="w-fit text-3xl sm:text-7xl font-thunder">
					Giving You Solutions <br></br>For Smarter Contracts
				</h1>
				<p className="w-fit text-xs sm:text-xl text-[#282828] font-inter">
					Are you tired of complex and slow administration ? <br></br>Get your
					first decentralized contract, entirely <br></br>managed with
					blockchain technology
				</p>
			</div>
		  	<div className="flex gap-[1vw]">
          		<ConnectButton2 />
            	<button className="btn-confirmation" onClick={() => navigate('/access')} >Access contract</button>
		  	</div>
         </div>
        <div  className="absolute left-[30vw] -top-[5vh] -z-10">
          <img src={abstractV2} alt="Abstract" className="relative w-[85%] h-[100%] object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default MainPageConnected;
