# 🚀 Monad 0x Swap dApp

Una aplicación descentralizada (dApp) moderna para intercambio de tokens en **Monad Testnet** usando la **0x Swap API v2**. Construida con **Next.js 15**, **React 19**, **wagmi**, y **RainbowKit**.

![Monad](https://img.shields.io/badge/Network-Monad_Testnet-purple)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![0x API](https://img.shields.io/badge/0x_API-v2-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## ✨ Características

- 🔄 **Intercambio de tokens** usando 0x Swap API v2
- ⚡ **Monad Testnet** completamente soportado (Chain ID: 10143)
- 🎨 **UI moderna** con Tailwind CSS y shadcn/ui
- 🔗 **Conexión de wallets** con RainbowKit
- 📱 **PWA Ready** - Instala como app nativa
- 🚀 **Gasless transactions** (próximamente)
- 📊 **Precios en tiempo real** y cotizaciones precisas
- 🔒 **Seguridad** con validaciones y manejo de errores

## 🎯 Información de Red

| Parámetro | Valor |
|-----------|-------|
| **Red** | Monad Testnet |
| **Chain ID** | `10143` |
| **Explorador** | [https://monad.explorer](https://monad.explorer) |
| **0x Support** | ✅ Swap API disponible |

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Web3**: wagmi v2, viem, RainbowKit
- **UI**: Tailwind CSS, shadcn/ui, Lucide React
- **APIs**: 0x Swap API v2 con Permit2
- **PWA**: next-pwa para funcionalidad offline

## 🚀 Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone https://github.com/HackBalam/GoyoIANext.git
cd GoyoIANext
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_ZEROEX_API_KEY=tu_api_key_aqui
```

> 📝 **Obtén tu API key**: [0x Dashboard](https://dashboard.0x.org/)

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/
│   │   ├── price/route.ts      # Endpoint para precios
│   │   └── quote/route.ts      # Endpoint para cotizaciones
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página home
├── components/
│   ├── ui/                     # Componentes UI base
│   ├── web3/
│   │   ├── SwapErc20Modal.tsx  # Modal principal de swap
│   │   └── SwitchChainModal.tsx # Modal cambio de red
│   ├── ConnectButton.tsx       # Botón conectar wallet
│   ├── ContextProvider.tsx     # Providers Web3
│   └── PWAInstall.tsx          # Componente PWA
├── lib/
│   ├── constants.ts            # Tokens y configuración
│   └── wagmi.ts               # Configuración wagmi
└── types/
    └── index.ts               # Tipos TypeScript
```

## 🎮 Uso

### 1. Conectar Wallet
- Haz clic en "Connect Wallet"
- Selecciona tu wallet preferida (MetaMask, WalletConnect, etc.)
- Cambia a Monad Testnet si es necesario

### 2. Realizar Swap
- Selecciona el token a vender y la cantidad
- Elige el token que deseas comprar
- Revisa la cotización y los fees
- Aprueba el allowance si es necesario
- Confirma la transacción

### 3. Monitorear Transacciones
- Todas las transacciones se pueden ver en [Monad Explorer](https://monad.explorer)
- Recibirás notificaciones del estado

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm run start

# Linting
npm run lint

# Generar iconos PWA
node scripts/generate-icons.js
```

## 🎯 Tokens Soportados

| Token | Symbol | Decimals | Red |
|-------|--------|----------|-----|
| Wrapped Monad | WMON | 18 | Monad |
| USD Coin | USDC | 6 | Monad |
| Dai Stablecoin | DAI | 18 | Monad |

> ⚠️ **Nota**: Las direcciones de contratos son placeholders y deben actualizarse con las direcciones reales de Monad.

## 🔄 API Endpoints

### Price Endpoint
```
GET /api/price?chainId=10143&sellToken=0x...&buyToken=0x...&sellAmount=1000000000000000000
```

### Quote Endpoint
```
GET /api/quote?chainId=10143&sellToken=0x...&buyToken=0x...&sellAmount=1000000000000000000
```

## 🛡️ Seguridad

- ✅ Validación de inputs y parámetros
- ✅ Manejo seguro de allowances
- ✅ Verificación de balances
- ✅ Protección contra slippage excesivo
- ✅ Rate limiting en APIs
- ⚠️ **Nunca compartir tu API key públicamente**

## 📱 PWA Features

- 📲 **Instalación**: Instala la dApp como app nativa
- 🔄 **Offline**: Funcionalidad básica sin conexión
- 🎨 **Iconos adaptativos** para diferentes dispositivos
- 📋 **Manifest** optimizado para stores

## 🚧 Roadmap

- [ ] **Gasless Transactions** - Swaps sin gas fees
- [ ] **Multi-chain Support** - Ethereum, Polygon, etc.
- [ ] **Advanced Trading** - Límites, DCA, etc.
- [ ] **Analytics Dashboard** - Historial y estadísticas
- [ ] **Token Lists** - Soporte para listas personalizadas
- [ ] **MEV Protection** - Protección contra front-running

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Documentación Adicional

- 📖 [CLAUDE.md](./CLAUDE.md) - Tutorial completo de implementación
- 📋 [README-REOWN.md](./README-REOWN.md) - Documentación Reown/WalletConnect
- 🔗 [0x API Documentation](https://docs.0x.org/)
- 🌐 [Monad Documentation](https://docs.monad.xyz/)

## ⚠️ Disclaimer

Este proyecto está en **desarrollo activo** y es para **fines educativos y de testnet**. 

- ⚠️ **No usar en mainnet** sin testing exhaustivo
- 🧪 **Solo Monad Testnet** por ahora
- 💡 **Direcciones de tokens son placeholders**
- 🔒 **Auditar antes de usar en producción**

## 📞 Soporte

¿Tienes preguntas o necesitas ayuda?

- 🐛 [Reportar bugs](https://github.com/HackBalam/GoyoIANext/issues)
- 💬 [Discusiones](https://github.com/HackBalam/GoyoIANext/discussions)
- 📧 Email: hackbalam@ejemplo.com

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Construido con ❤️ para la comunidad Monad**

[🌐 Website](https://goyoia-next.vercel.app) | [📱 Demo](https://goyoia-next.vercel.app) | [📖 Docs](./CLAUDE.md)

</div>
