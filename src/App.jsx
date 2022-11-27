import './App.css'

import MainPage from './pages/main-page';
import FormPage from './pages/form-page';
import SummaryPage from './pages/summary-page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WagmiConfig, createClient, configureChains, defaultChains} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const mumbai= {
  id: 80001,
  name: 'testnet',
  network: 'Mumbai',
  nativeCurrency: {
    decimals: 18,
    name: 'matic-test',
    symbol: 'MATIC',
  },
  rpcUrls: {
    default: 'https://rpc-mumbai.maticvigil.com',
  },
  blockExplorers: {
    default: { name: 'mumbai.polygonscan', url: 'https://mumbai.polygonscan.com/' },
  },
  testnet: true,
}

const { chains, provider, webSocketProvider } = configureChains(
  [mumbai],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
})

export default function App() {
  return (
    <WagmiConfig client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/form" element={<FormPage/>}/>
            <Route path="/summary/:contractaddress" element={<SummaryPage/>}/>
          </Routes>
        </div>
      </Router>
    </WagmiConfig>
  )
}
