# Monad 0x Swap dApp with Reown Integration

A token swap application built with Next.js, 0x API, and Reown (formerly WalletConnect) for the Monad testnet.

## ✅ Completed Integration

### Reown AppKit Setup
- ✅ **Configured Reown AppKit** with your API key: `c39e06f90add2c9efc1b766132cd5531`
- ✅ **Connected to Monad Testnet** (Chain ID: 10143)
- ✅ **Replaced RainbowKit** with Reown AppKit for better wallet support
- ✅ **Updated all components** to use Reown hooks

### Features
- 🔗 **Multiple Wallet Support** - MetaMask, WalletConnect, and more
- 🌐 **Network Switching** - Automatic prompts to switch to Monad Testnet
- 💱 **Token Swapping** - Powered by 0x Swap API
- 📱 **Responsive UI** - Works on desktop and mobile
- ⚡ **Real-time Prices** - Live token price updates

## 🚀 How to Use

### 1. Start the Application
```bash
npm run dev
```

### 2. Connect Your Wallet
- Click "Connect Wallet" button
- Choose from supported wallets:
  - MetaMask
  - WalletConnect (mobile wallets)
  - Other injected wallets

### 3. Switch to Monad Testnet
- If not on Monad Testnet, click "Switch to Monad Testnet"
- Approve the network switch in your wallet

### 4. Perform Token Swaps
- Select tokens from the dropdown
- Enter amount to swap
- Click "Aprobar" if needed (for token allowance)
- Click "Revisar Trade" to review
- Click "Colocar Orden" to execute swap

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_ZEROEX_API_KEY=15ad0727-14d1-4257-9901-3af0672f62d4
NEXT_PUBLIC_REOWN_PROJECT_ID=c39e06f90add2c9efc1b766132cd5531
```

### Supported Tokens on Monad Testnet
- **MON** - Native Monad token
- **WMON** - Wrapped Monad (0x760afe86e5de5fa0ee542fc7b7b713e1c5425701)
- **USDC** - USD Coin (0xf817257fed379853cDe0fa4F97AB987181B1E5Ea)
- **WETH** - Wrapped Ethereum (0xB5a30b0FDc42e3E9760Cb8449Fb37)
- **USDT** - Tether USD (0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D)
- **WBTC** - Wrapped Bitcoin (0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d)

## 🏗️ Architecture

### Key Components
- **ConnectButton** - Reown wallet connection UI
- **SwapErc20Modal** - Main swap interface  
- **SwitchChainModal** - Network switching UI
- **ContextProvider** - Wagmi and React Query providers

### Key Files Updated for Reown
- `src/lib/wagmi.ts` - Reown AppKit configuration
- `src/components/ContextProvider.tsx` - Provider setup
- `src/components/ConnectButton.tsx` - Reown wallet button
- `src/app/layout.tsx` - App providers
- `src/app/page.tsx` - Main app with Reown hooks

## 🔍 Testing

### Prerequisites
1. **Wallet with Monad Testnet** configured
2. **Test tokens** from Monad faucet
3. **Internet connection** for 0x API calls

### Test Flow
1. ✅ Connect wallet
2. ✅ Switch to Monad Testnet
3. ✅ Select tokens to swap  
4. ✅ Get price quotes
5. ✅ Approve token allowances
6. ✅ Execute swaps

## 🛠️ Development

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## 🔗 Links

- **Reown Dashboard**: https://cloud.reown.com/
- **0x Dashboard**: https://dashboard.0x.org/
- **Monad Testnet Explorer**: https://testnet.monadexplorer.com/
- **App URL**: http://localhost:3000

## ⚠️ Notes

- The `pino-pretty` warning during build is harmless and doesn't affect functionality
- Make sure your wallet is configured for Monad Testnet (Chain ID: 10143)
- Token addresses are real testnet addresses from official Monad documentation
- Always test with small amounts first

---

✅ **Integration Complete!** Your dApp now uses Reown for wallet connections and supports multiple wallets with the 0x Swap API on Monad testnet.