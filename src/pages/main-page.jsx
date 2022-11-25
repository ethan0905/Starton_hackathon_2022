import ConnectButton from "../components/connect-button.jsx";
import Logo from "../assets/PAYCONSENT.svg"

function MainPage() {
  return (
    <div className="w-screen h-screen bg-[#f4f1ee] absolute flex flex-col">
      <nav>
        <img src={Logo} alt="Logo" className="h-[30px] ml-[80px] mt-[30px]"/>
      </nav>
      <main className='w-screen flex-grow flex flex-col justify-center items-center'>
        <div className='text-center flex flex-col items-center max-w-[90%]'>
          <h1 className='w-fit self-center text-3xl sm:text-5xl font-thunder'>Giving You Solutions <br></br>For Smarter Contracts</h1>
          <p className='w-fit self-center text-xs sm:text-sm text-[#282828] font-inter'>
            Are you tired of complex and slow administration ? <br></br>Get your
            first decentralized contract, entirely <br></br>managed with
            blockchain technology
          </p>
          <ConnectButton/>
        </div>
      </main>
    </div>
  )
}

export default MainPage;