import './App.css'

import MainPage from './pages/main-page';
import FormPage from './pages/form-page';
import SummaryPage from './pages/summary-page';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/form" element={<FormPage/>}/>
          <Route path="/summary" element={<SummaryPage/>}/>
        </Routes>
      </div>
  </Router>
  )
}
