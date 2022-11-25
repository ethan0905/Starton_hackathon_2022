import React from "react";
import { Component } from "react";
import "../assets/css/form.css";
import { useState } from "react";
import axios from 'axios'; 
import FormData from "form-data";

const starton = axios.create({
	baseURL: "https://api.starton.io/v3",
})

function FormPage (){
	let urls = [];
	
	const handleSubmission = () => {
	};

	const changeHandler = async(event) => {
		if (event.target.files[0])
		{
			const data = new FormData();
			data.append("file", event.target.files[0], event.target.files[0].name);
			data.append("isSync", true);
			const res = await starton.post('/ipfs/file',
				data, {
						headers: {
									"x-api-key": 'sk_live_89c7396e-c994-415e-9127-8bb3f7b8a7d4',
									"Content-Type": "multipart/form-data"},
				})
				console.log(res.data);
		}
		// 	let reader = new FileReader();
		// 	reader.readAsDataURL(event.target.files[0]);
		// 	reader.onload = () => {
		// 		if (reader.readyState === 2) {
		// 			console.log(reader.result);
					// starton.post('/ipfs/file',reader.result,{
					// 	metadata: {}
					// },
					// 		).then((response) => {	
					// 			console.log(response.data);
					// 		})
				// }
			
		// 	console.log(typeof event.target.files[0])
		// 	// console.log(event.target.files[0]);
		// 	const file1 = new Buffer.from(JSON.stringify(event.target.files[0]));
		// 	console.log(file1);
		// 	// const file1 = await toBase64(event.target.files[0]);
	};
    return (
      <>
        <div>
          <h1 className="logo-over-white">
            PAYCONSENT<span className="dot-color">.</span>
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
                    <button className="btn" onClick={handleSubmission}>{urls.length == 2 ? "Files Uploaded":"Upload a file"}</button>
                    <input 
					// onClick={starton.post('/ipfs/file',
					// 	{
					// 		"metadata": { },
					// 	}
					// ).then((response) => {	
					// 	console.log(response.data);
					// })}
					onChange={() => changeHandler(event)}
					type="file" name="myfile" multiple/> 
					{/* type="file" name="myfile" /> */}
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

export default FormPage;