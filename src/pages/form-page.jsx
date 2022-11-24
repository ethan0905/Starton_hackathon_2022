import React from "react";
import { Component } from "react";
import "../assets/css/form.css";

class FormPage extends Component {
  render() {
    return (
      <>
        <div>
          <h1 class="logo-over-white">
            PAYCONSENT<span class="dot-color">.</span>
          </h1>
        </div>
        <div className="total-form">
          <div className="green-line">
          </div>
          <form className="form-div-total">
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
                  <input
                    className="select-box"
                    type="name"
                    id="exampleInput8"
                    placeholder="Enter your wallet ID"
                  />
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
                  <p className="text-[13px]">(Quotation, Specifications ...)</p>
                </div>
                <div>
                  <div class="upload-btn-wrapper">
                    <button class="btn">Upload a file</button>
                    <input type="file" name="myfile" />
                  </div>
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
                <button type="dismiss">Dismiss</button>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormPage;