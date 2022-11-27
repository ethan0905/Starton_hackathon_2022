import { Navigate } from 'react-router-dom';
import { useAccount, useConnect} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useNavigate } from 'react-router-dom';

export default function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const navigate = useNavigate();

  if (isConnected)
    navigate("/form");
  return (
    <button onClick={() => connect()}className="bg-[#A5DFD5] text-[#282828] h-[2.5em] pl-[2em] pr-[2em] rounded-[10em] text-[16px] shadow-lg hover:bg-[#282828] hover:text-[#F4F1EE] transition ease-out delay-300 hover:translate-y-[-3px] last:mt-[2em]">
      Connect Wallet
    </button>
  );
}