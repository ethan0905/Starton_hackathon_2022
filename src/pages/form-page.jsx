import React from "react";
import { Component } from "react";
import "../assets/css/form.css";
// import Form from "../components/form";
// import greenline from "../assets/images/green-line.png";
import "../assets/css/button.css";
import "../assets/css/summary-page.css";

const json = {
  data: {
    price: "2.7",
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  },
  ipfs: {
    file: "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
  },
};

class FormPage extends Component {
  render() {
    return (
      //   <div className="bg-black w-screen h-screen">
      <>
        <div>
          <h1 class="logo-over-white">
            PAYCONSENT<span class="dot-color">.</span>
          </h1>
        </div>
        <div className="total-form">
          <form className="form-div-total">
            <div className="green-line"></div>
            <div className="form-div">
              <div className="form-div1">
                <div className="title-form">
                  <h1>Create a contract</h1>
                </div>
                <div className="status-div">
                  <div className="label-status">
                    <label class="status-title" for="contractStatus">
                      Status
                    </label>
                    <p className="text-[13px]">Seller or Buyer</p>
                  </div>
                  <div className="select-box-div">
                    <select className="select-box">
                      <option value="0" selected disabled>
                        Status
                      </option>
                      <option value="1">Buyer</option>
                      <option value="2">Seller</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-div2">
                <div className="status-div">
                  <div className="label-status">
                    <label class="status-title" for="contractName">
                      My Wallet ID
                    </label>
                    <p className="text-[13px]">The creator of this contract</p>
                  </div>
                  <div className="select-box-div">
                    <div className="wallet-id-total">
                      <div class="wallet-id-section">
                        <div className="id-metamask-form">
                          <i class="fas fa-hashtag"></i>
                          <strong className="id-name">
                            {json.data.address}
                          </strong>
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
                    {/* <div class="wallet-id-section"> */}
                    {/* <div className="id-metamask">
                        <i class="fas fa-hashtag"></i>
                        <strong className="id-name">{json.ipfs.file}</strong>
                        <i
                          style={{ cursor: "pointer", marginLeft: 2 }}
                          onClick={() => {
                            navigator.clipboard.writeText(json.data.address);
                          }}
                          className="far fa-clone"
                        ></i>
                      </div> */}
                    {/* </div> */}

                    {/* <input
                      className="select-box"
                      type="name"
                      id="exampleInput8"
                      placeholder="Enter your wallet ID"
                    /> */}
                  </div>
                </div>
                <div className="status-div">
                  <div className="label-status">
                    <label class="status-title" for="contractSubject">
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
                    <label class="status-title" for="contractWalletAddress">
                      Sending To
                    </label>
                    <p className="text-[13px]">The receiver</p>
                  </div>
                  <div className="select-box-div">
                    <input
                      className="select-box"
                      id="exampleInput8"
                      placeholder="Enter the receiver's wallet ID"
                    />
                  </div>
                </div>
                <div className="status-div-upload">
                  <div className="label-status">
                    <label class="status-title">File To Upload</label>
                    <p className="text-[13px]">
                      (Quotation, Specifications ...)
                    </p>
                  </div>
                  <div>
                    <div class="upload-btn-wrapper">
                      <button class="btn">Upload a file</button>
                      <input type="file" name="myfile" />
                    </div>
                    {/* <input className="btn" "upload-file" id="default_size" type="file"/> */}
                  </div>
                </div>
                <div className="status-div">
                  <div className="label-status">
                    <label class="status-title" for="contractPrice">
                      Price
                    </label>
                  </div>
                  <div className="select-box-div-price">
                    <input
                      className="select-box-price"
                      type="price"
                      id="exampleInput8"
                      placeholder="Price"
                    />
                    <p className="bnb-tag">BNB</p>
                  </div>
                </div>
              </div>
              <div className="form-div3">
                <div>
                  <button className="text-[13px]" type="dismiss">
                    Dismiss
                  </button>
                </div>
                <div>
                  <button className="btn-connexion" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default FormPage;
