import "../assets/css/form.css";
import "../assets/css/button.css";
import "../assets/css/summary-page.css";
import "../assets/css/home.css";
import Logo from "../assets/PAYCONSENT.svg"
import {useNavigate } from "react-router-dom";
import { useAccount} from 'wagmi';

function AccessContract() {
	const navigate = useNavigate();
	const { address, isConnected } = useAccount();

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
        <form className="form-div-total">
          <div className="green-line-2"></div>
          <div className="form-div">
            <div className="form-div5">
              <div className="title-form">
                <h1>Access a contract</h1>
              </div>
              <div className="status-div">
                <div className="label-status">
                  <p className="text-[13px]">Enter the contract <br></br> adress received</p>
                </div>
                <div className="select-box-div">
					<input className="select-box-access" placeholder="0x98m37fs6c38yfcn..."></input>
                </div>
              </div>
            </div>
            
            <div className="form-div3">
              <div className="bg-red-300 pl-3 pr-3 pt-1 pb-1 rounded-[6px]">
			  	<i className="fa-solid fa-xmark"></i>
              </div>
              <div>
                <button className="btn-connexion"r>
                  Access
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccessContract;