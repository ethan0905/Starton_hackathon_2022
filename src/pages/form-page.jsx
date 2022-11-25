import React from "react";
import "../assets/css/form.css";
import "../assets/css/button.css";
import "../assets/css/summary-page.css";
import Logo from "../assets/PAYCONSENT.svg"

import axios from "axios";
import FormData from "form-data";

const json = {
  data: {
    price: "2.7",
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  },
  ipfs: {
    file: "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
  },
};

const starton = axios.create({
  baseURL: "https://api.starton.io/v3",
});

function FormPage() {
  let urls = [];

  const handleSubmission = () => {};

  const changeHandler = async (event) => {
    if (event.target.files[0]) {
      const data = new FormData();
      data.append("file", event.target.files[0], event.target.files[0].name);
      data.append("isSync", true);
      const res = await starton.post("/ipfs/file", data, {
        headers: {
          "x-api-key": "sk_live_89c7396e-c994-415e-9127-8bb3f7b8a7d4",
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    }
  };
  return (
    <>
      <div>
        {/* <h1 className="logo-over-white">
          PAYCONSENT<span className="dot-color">.</span>
        </h1> */}
        <img src={Logo} alt="Logo" className="h-[30px] ml-[80px] mt-[30px]"/>
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
                  <label className="status-title">
                    Status
                  </label>
                  <p className="text-[13px]">Seller or Buyer</p>
                </div>
                <div className="select-box-div">
                  <select className="select-box">
                    <option defaultValue="0" disabled>
                      Status
                    </option>
                    <option defaultValue="1">Buyer</option>
                    <option defaultValue="2">Seller</option>
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
    </>
  );
}

export default FormPage;
