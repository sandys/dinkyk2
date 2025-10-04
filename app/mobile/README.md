# DinkyK2 React Native App

Expo-managed React Native client targeting iPad devices. Bootstrapped with TypeScript, Jest, and Detox placeholders. See `AGENTS.md` for contributor workflows and `IMPLEMENTATION_PLAN.md` for phased delivery goals.

## Scripts
- `yarn start` – Launch Metro bundler (LAN mode).
- `yarn start:tunnel` – Launch Metro bundler with tunnel mode (for remote access).
- `yarn ios --device "iPad"` – Run on iPad simulator (once dependencies are installed).
- `yarn lint` / `yarn lint:fix` – ESLint with TypeScript rules.
- `yarn test` – Jest unit tests (currently placeholder).
- `yarn test:e2e` – Detox suite (requires native build setup).
- `yarn typecheck` – TypeScript type checking.

## Development

### Local Development (LAN)
```bash
yarn start
```
Scan QR code with Expo Go app on device connected to same network.

### Remote Development (Tunnel)
```bash
yarn start:tunnel
```
Scan QR code with Expo Go app from anywhere. See `TUNNEL_SETUP.md` for details.
