import React from "react";
import { Component } from "react";

import "../assets/css/summary-page.css";

const json = {
		"data": {
			  "price": "2.7",
			  "address": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
			},
		"ipfs": {
			"file": "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
			}
		}

class SummaryPage extends Component {
	render() {
		return (
			<div className="w-full h-auto overflow-scroll block h-screen background p-4 flex items-center justify-center" >
				<div className="flex items-center justify-center flex-col ">
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
				</div>
			</div>
		); 
	}
}

export default SummaryPage;