import ConnectButton from "../components/connect-button.jsx";
import Logo from "../assets/PAYCONSENT.svg";
import { useNavigate } from "react-router-dom";
import abstract from "../assets/images/Abstract-design.png";

function MainPage() {
  return (
    <div className="w-screen h-screen bg-[#f4f1ee] absolute flex flex-col">
      <nav>
        <img src={Logo} alt="Logo" className="h-[30px] ml-[80px] mt-[30px]" />
      </nav>
      {/* <div className="flex flex-row justify-center"> */}
      <main className="absolute bottom-1.5  w-screen flex-grow flex flex-start justify-center items-center">
        <div className="relative z-50 text-align-left flex flex-col items-start max-w-[90%] left-20">
          <h1 className="w-fit self-center text-3xl sm:text-8xl font-thunder">
            Giving You Solutions <br></br>For Smarter Contracts
          </h1>
          <p className="w-fit  text-xs sm:text-2xl text-[#282828] font-inter">
            Are you tired of complex and slow administration ? <br></br>Get your
            first decentralized contract, entirely <br></br>managed with
            blockchain technology
          </p>
          <ConnectButton />
        </div>
        <div ClassName="absolute z-0 ">
          <img src={abstract}></img>
        </div>
      </main>
      {/* </div> */}
    </div>
  );
}

export default MainPage;
