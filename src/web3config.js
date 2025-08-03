// src/web3config.js
import { defaultWagmiConfig } from '@web3modal/wagmi/react'
import { mainnet, sepolia } from 'wagmi/chains'

// 1. Get projectId from https://cloud.walletconnect.com
export const projectId = '233ef4577ebdd04c28d3b2b50134f7c0'

// 2. Define metadata
const metadata = {
  name: 'SpiritsSTO',
  description: 'SpiritsSTO Investor Dashboard',
  url: 'http://localhost:5173', // Correct URL for localhost
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 3. Define chains
export const chains = [mainnet, sepolia]

// 4. Export wagmiConfig
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })