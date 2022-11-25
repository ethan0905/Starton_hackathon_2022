import React from "react";
import { Component } from "react";
import ConnectButton from "../components/connect-button.jsx";

import "../assets/css/home.css";

class MainPage extends Component {
  render() {
    return (
      <div className="w-screen h-screen">
        <div>
          <h1 className="logo-over-white">
            PAYCONSENT<span className="dot-color">.</span>
          </h1>
        </div>
        <div className="intro-div">
          <h2 className="intro-title">
            Giving You Solutions <br></br>For Smarter Contracts
          </h2>
          <quote className="intro-quote">
            Are you tired of complex and slow administration ? <br></br>Get your
            first decentralized contract, entirely <br></br>managed with
            blockchain technology
          </quote>
          <ConnectButton />
        </div>
      </div>
    );
  }
}

export default MainPage;