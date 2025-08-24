'use client'

import React, { ReactNode } from 'react'
import { config, queryClient } from '@/lib/wagmi'

import { QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider } from 'wagmi'

export function ContextProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}