import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { defineChain } from 'viem'
import { sepolia } from 'viem/chains'
import { QueryClient } from '@tanstack/react-query'

// Define Monad testnet chain
export const monadTestnet = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Monad',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.monad.xyz'],
    },
    public: {
      http: ['https://rpc.ankr.com/monad_testnet'],
    },
  },
  blockExplorers: {
    default: { name: 'Monad Explorer', url: 'https://testnet.monadexplorer.com' },
  },
  testnet: true,
})

// Get project ID from environment
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || 'c39e06f90add2c9efc1b766132cd5531'

// Set up the Wagmi adapter  
const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks: [sepolia, monadTestnet],
  projectId,
})

// Create the AppKit instance
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [sepolia, monadTestnet],
  defaultNetwork: sepolia, // Use Sepolia as default for 0x API compatibility
  metadata: {
    name: 'Monad 0x Swap dApp',
    description: 'Token swap application using 0x API on Monad testnet',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  },
  themeMode: 'light',
  features: {
    analytics: true,
  }
})

export const config = wagmiAdapter.wagmiConfig

// Query client for React Query
export const queryClient = new QueryClient()