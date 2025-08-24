'use client';

import { Toaster } from 'sonner';
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react';

import { ConnectButton } from '@/components/ConnectButton';
import SwapErc20Modal from '@/components/web3/SwapErc20Modal';
import SwitchChainModal from '@/components/web3/SwitchChainModal';
import { PWAInstall } from '@/components/PWAInstall';

function DAppContent() {
  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Monad 0x Swap
            </h1>
            <p className="text-gray-600">
              Token swap powered by 0x API on Sepolia testnet
            </p>
            <div className="flex justify-center mt-2">
              <PWAInstall />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center">
              <ConnectButton />
            </div>
            
            {isConnected && (
              <div className="space-y-3">
                {chainId === 11155111 ? (
                  <SwapErc20Modal userAddress={address as `0x${string}`} />
                ) : (
                  <SwitchChainModal
                    buttonText="Switch to Sepolia Testnet"
                    requiredChainId={11155111}
                  />
                )}
              </div>
            )}
            
            {!isConnected && (
              <div className="text-center text-gray-500 py-4">
                Connect your wallet to start swapping tokens
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <DAppContent />
      <Toaster position="top-right" />
    </>
  );
}