import React from "react";
import { Component } from "react";
import Logo from "../assets/PAYCONSENT.svg"

import "../assets/css/summary-page.css";
import "../assets/css/form.css";

const json = {
  data: {
    price: "2.7",
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  },
  ipfs: {
    file: "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
  },
};

function SummaryPage(){
  return (
    <div className="w-full h-auto overflow-scroll block h-screen background p-4 flex items-center justify-center">
      <div className="w-screen ml-[64px] mt-[14px]">
        <img src={Logo} alt="Logo" className="h-[30px]"/>
      </div>
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
              </div>
              <div className="contract-div">
                <div className="label-status">
                  <p class="status-title">Contract ID</p>
                </div>
                <div className="wallet-id-total">
                  <div class="wallet-id-section">
                    <div className="id-metamask">
                      <i class="fas fa-hashtag"></i>
                      <strong className="id-name">{json.ipfs.file}</strong>
                      <i
                        style={{ cursor: "pointer", marginLeft: 2 }}
                        onClick={() => {
                          navigator.clipboard.writeText(json.ipfs.file);
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
                      <strong className="id-name">{json.data.address}</strong>
                      <i
                        style={{ cursor: "pointer", marginLeft: 2 }}
                        onClick={() => {
                          navigator.clipboard.writeText(json.data.address);
                        }}
                        className="far fa-clone"
                      ></i>
                    </div>
                    <div className="id-metamask">
                      <i class="fas fa-hashtag"></i>
                      <strong className="id-name">{json.data.address}</strong>
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

              <div>
                <div className="contract-div">
                  <div className="label-status">
                    <p class="status-title">Price</p>
                  </div>
                  <div className="wallet-id-total">
                    <p className="bnb-tag">
                      <span className="text-[20px]">{json.data.price}</span>{" "}
                      BNB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-div3">
              <div>
                <button className="text-[13px]" type="cancel">
                  Cancel
                </button>
              </div>
              <div>
                <div class="btn-status-pending" type="submit">
                  Pending
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
