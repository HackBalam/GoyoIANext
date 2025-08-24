'use client';

import { useEffect, useState } from 'react';
import { useAppKitNetwork } from '@reown/appkit/react';
import { monadTestnet } from '@/lib/wagmi';
import { sepolia } from 'viem/chains';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function SwitchChainModal({
  buttonText,
  requiredChainId,
}: {
  buttonText: string;
  requiredChainId: number;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { switchNetwork } = useAppKitNetwork();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  function handleSwitchChain() {
    try {
      const targetNetwork = requiredChainId === 11155111 ? sepolia : monadTestnet;
      switchNetwork(targetNetwork);
      toast.success(`Cambiando a la cadena ${targetNetwork.name}`);
    } catch (error) {
      console.error('Error switching chain:', error);
      toast.error('Error al cambiar de cadena');
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <Button>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Cambiar Cadena</DialogTitle>
          <DialogDescription>
            {`Esta acción solo está habilitada para ${requiredChainId === 11155111 ? sepolia.name : monadTestnet.name}. Necesitas cambiar de cadena`}
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleSwitchChain}>
          {`Cambiar a ${requiredChainId === 11155111 ? sepolia.name : monadTestnet.name}`}
        </Button>
      </DialogContent>
    </Dialog>
  );
}