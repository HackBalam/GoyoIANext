[README (1).md](https://github.com/user-attachments/files/21957472/README.1.md)
# GoyoIA Next — Monad 0x Swap dApp

Aplicación **dApp** para hacer *swaps* de tokens en **Monad Testnet** usando **0x Swap API v2**. Construida con **Next.js 15**, **React 19**, **TypeScript**, **wagmi/viem** y **RainbowKit**, con UI en **Tailwind + shadcn/ui** y soporte **PWA**.

> **Demo**: https://goyoia-next.vercel.app (si está disponible)  
> **Licencia**: ISC

---

## ✨ Características

- Intercambio de tokens vía **0x Swap API v2** (Permit2).
- Soporte completo para **Monad Testnet** (Chain ID: `10143`).
- Conexión de wallet con **RainbowKit** (WalletConnect, MetaMask, etc.).
- UI moderna con **Tailwind CSS** y **shadcn/ui**.
- **PWA ready** (instalable, offline básico).
- Endpoints internos para `price` y `quote`.
- Manejo de errores, validaciones y slippage.

---

## 🧱 Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Web3:** wagmi v2, viem, RainbowKit
- **UI:** Tailwind CSS, shadcn/ui, Lucide React
- **API:** 0x Swap API v2
- **PWA:** next-pwa

---

## 🗺️ Estructura del proyecto

```
src/
  app/
    api/
      price/route.ts      # Endpoint de precios
      quote/route.ts      # Endpoint de cotizaciones
    layout.tsx            # Layout principal
    page.tsx              # Página principal
  components/
    ui/                   # Componentes base (shadcn)
    web3/
      SwapErc20Modal.tsx  # Modal principal de swap
      SwitchChainModal.tsx# Cambio de red
    ConnectButton.tsx
    ContextProvider.tsx   # Providers (wagmi, RainbowKit, etc.)
    PWAInstall.tsx        # Componente de instalación PWA
  lib/
    constants.ts          # Lista de tokens, chain config
    wagmi.ts              # Config wagmi
types/
  index.ts
scripts/
  generate-icons.js       # Generación de íconos para PWA
```

---

## 🔑 Variables de entorno

Crea un archivo `.env.local` en la raíz (o usa el ya provisto `.env.example` como base):

```bash
NEXT_PUBLIC_ZEROEX_API_KEY=tu_api_key_de_0x
```

> Consigue tu API Key en el dashboard de 0x. **No** la publiques en el repo.

En Vercel, añade la misma variable en **Project → Settings → Environment Variables**.

---

## ▶️ Puesta en marcha (local)

```bash
# 1) Clonar
git clone https://github.com/HackBalam/GoyoIANext.git
cd GoyoIANext

# 2) Instalar deps
npm install
# o: yarn install / pnpm install

# 3) Variables de entorno
cp .env.example .env.local
# edita .env.local con tu NEXT_PUBLIC_ZEROEX_API_KEY

# 4) Ejecutar en dev
npm run dev
# abre http://localhost:3000
```

---

## 🚀 Despliegue en Vercel

### Opción A: desde tu máquina (Vercel CLI)

1. Instala y autentícate:
   ```bash
   npm i -g vercel
   vercel login
   ```
2. Enlaza el proyecto (en la carpeta del repo):
   ```bash
   vercel
   # responde los prompts (Framework: Next.js detectado automáticamente)
   ```
3. Configura variables:
   ```bash
   vercel env add NEXT_PUBLIC_ZEROEX_API_KEY
   # pega el valor de tu API key de 0x
   ```
4. Despliega:
   ```bash
   # despliegue previo (Preview)
   vercel

   # despliegue a producción
   vercel --prod
   ```
> Vercel detecta Next.js y usa `npm run build` automáticamente.

### Opción B: importando el repo (GitHub → Vercel)

1. Asegúrate de que el repo esté en GitHub (`HackBalam/GoyoIANext`).  
2. En Vercel, **New Project → Import Git Repository**.  
3. Framework **Next.js** (auto), Build Command `next build` (auto).  
4. Añade `NEXT_PUBLIC_ZEROEX_API_KEY` en **Environment Variables**.  
5. **Deploy**. Cada push a `main` dispara deploy.

---

## 🧩 API interna

### `/api/price`
```
GET /api/price?chainId=10143&sellToken=0x...&buyToken=0x...&sellAmount=1000000000000000000
```

### `/api/quote`
```
GET /api/quote?chainId=10143&sellToken=0x...&buyToken=0x...&sellAmount=1000000000000000000
```

> Ajusta `sellAmount` en **wei** y usa direcciones reales de tokens en Monad Testnet.

---

## 🪙 Red y tokens

- **Red:** Monad Testnet
- **Chain ID:** `10143`
- **Explorador:** https://monad.explorer/
- **Tokens (ejemplo):** WMON (18), USDC (6), DAI (18)  
  > ⚠️ Las direcciones en `lib/constants.ts` son *placeholders*—reemplázalas por las reales.

---

## 🧪 Scripts útiles

```bash
# Desarrollo
npm run dev

# Lint
npm run lint

# Build de producción
npm run build

# Arranque en prod (Node)
npm run start

# Generar íconos PWA
node scripts/generate-icons.js
```

---

## 🔒 Seguridad

- Valida inputs y límites de **slippage**.
- Usa **allowances** mínimos necesarios.
- No expongas tu API key en el front ni en el repo.
- Añade **rate limiting** en endpoints.
- Revisa permisos en carteras y revoca allowances cuando no se usen.

---

## 🛣️ Roadmap (ideas)

- Gasless transactions
- Multi-chain (Ethereum, Polygon, …)
- Órdenes avanzadas (Límites, DCA)
- Analytics/Historial
- Token Lists personalizadas
- MEV protection

---

## 🤝 Cómo contribuir

1. Haz fork
2. Crea rama de feature: `git checkout -b feature/mi-feature`
3. Commits: `git commit -m "feat: agrega X"`
4. Push: `git push origin feature/mi-feature`
5. Abre Pull Request

---

## 📄 Documentación relacionada

- `CLAUDE.md` — tutorial de implementación y notas.
- `README-REOWN.md` — docs de Reown/WalletConnect.

---

## 📄 Licencia

Este proyecto usa **ISC**. Ver `LICENSE` para más detalles.

---

Construido con ❤️ para la comunidad Monad
