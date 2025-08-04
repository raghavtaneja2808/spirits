// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

// --- THIS IS THE FIX ---
// 1. Import the creation function and your config
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { wagmiConfig, projectId, chains } from './web3config.js'
import KYCPage from './pages/KYCPage';

// 2. Call the function here to create the modal
createWeb3Modal({ wagmiConfig, projectId, chains })
// --------------------

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/kyc' element={<KYCPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;