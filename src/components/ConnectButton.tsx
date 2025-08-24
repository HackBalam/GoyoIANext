'use client'

import { useAppKit, useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { monadTestnet } from '@/lib/wagmi'

export function ConnectButton() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()

  const isCorrectNetwork = chainId === monadTestnet.id

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          onClick={() => open()}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          {formatAddress(address)}
        </Button>
        {!isCorrectNetwork && (
          <Badge variant="destructive" className="text-xs">
            Wrong Network
          </Badge>
        )}
        {isCorrectNetwork && (
          <Badge variant="secondary" className="text-xs">
            Monad Testnet
          </Badge>
        )}
      </div>
    )
  }

  return (
    <Button onClick={() => open()}>
      Connect Wallet
    </Button>
  )
}