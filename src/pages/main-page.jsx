import ConnectButton from "../components/connect-button.jsx";
import Logo from "../assets/PAYCONSENT.svg";
import abstractV2 from "../assets/images/Abstract-v2.png";

function MainPage() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="Logo" className="h-[30px] ml-[80px] mt-[30px]" />
      </nav>
      <div className="relative h-[92.4vh] left-[5vh] overflow-hidden flex flex-row content-center justify-between items-center flex-nowrap">
        <div className="absolute left-[10vw]">
          <h1 className="w-fit text-3xl sm:text-7xl font-thunder">
            Giving You Solutions <br></br>For Smarter Contracts
          </h1>
          <p className="w-fit text-xs sm:text-xl text-[#282828] font-inter">
            Are you tired of complex and slow administration ? <br></br>Get your
            first decentralized contract, entirely <br></br>managed with
            blockchain technology
          </p>
          <ConnectButton />
        </div>
        <div  className="absolute left-[30vw] -top-[5vh] -z-10">
          <img src={abstractV2} alt="Abstract" className="relative w-[85%] h-[100%] object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
