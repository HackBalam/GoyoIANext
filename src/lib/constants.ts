import { Address } from 'viem';

export type Token = {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
};

// Tokens para Monad Testnet - Using Sepolia for testing since Monad testnet not supported by 0x yet
export const MONAD_TOKENS: Token[] = [
  {
    chainId: 11155111, // Sepolia for testing
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Native token
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
  },
  {
    chainId: 11155111, // Sepolia for testing
    name: "Wrapped Ethereum",
    symbol: "WETH",
    decimals: 18,
    address: "0xfff9976782d46cc05630d1f6ebab18b2324d6b14", // Sepolia WETH
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
  {
    chainId: 11155111, // Sepolia for testing  
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", // Sepolia USDC
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  {
    chainId: 11155111, // Sepolia for testing
    name: "Dai Stablecoin", 
    symbol: "DAI",
    decimals: 18,
    address: "0x3e622317f8c93f7328350cf0b56d9ed4c620c5d6", // Sepolia DAI
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
];

// Mapeo por símbolo
export const MONAD_TOKENS_BY_SYMBOL: { [symbol: string]: Token } = 
  MONAD_TOKENS.reduce((acc, token) => {
    acc[token.symbol.toLowerCase()] = token;
    return acc;
  }, {} as { [symbol: string]: Token });

// Mapeo por dirección
export const MONAD_TOKENS_BY_ADDRESS: { [address: string]: Token } = 
  MONAD_TOKENS.reduce((acc, token) => {
    acc[token.address] = token;
    return acc;
  }, {} as { [address: string]: Token });

// Configuración para fees
export const AFFILIATE_FEE = "100"; // 1%
export const FEE_RECIPIENT = "0xD86ff862583CbAfe4c1aeCf0b2A5CcEb51819Df4"; // Replace with your address
export const MAX_ALLOWANCE = "115792089237316195423570985008687907853269984665640564039457584007913129639935";