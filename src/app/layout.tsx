import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ContextProvider } from '@/components/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Monad 0x Swap dApp',
  description: 'Token swap application using 0x API on Monad testnet',
  manifest: '/manifest.json',
  themeColor: '#8b5cf6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MonadSwap',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Monad 0x Swap dApp',
    title: 'Monad 0x Swap dApp',
    description: 'Token swap application using 0x API on Monad testnet',
    url: 'https://monad-swap.vercel.app',
    images: [{
      url: '/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'Monad Swap dApp Logo',
    }],
  },
  twitter: {
    card: 'summary',
    title: 'Monad 0x Swap dApp',
    description: 'Token swap application using 0x API on Monad testnet',
    images: ['/icon-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MonadSwap" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="shortcut icon" href="/icon.svg" />
      </head>
      <body className={inter.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}