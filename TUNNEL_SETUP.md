# Expo Tunnel Setup

## Running with Tunnel Mode

Tunnel mode allows you to access your development server from anywhere, not just your local network. This is useful for:
- Testing on physical devices not on the same network
- Sharing your development build with others
- Working behind restrictive firewalls

### Start the Tunnel

```bash
yarn start:tunnel
# or
npx expo start --tunnel
```

### What Happens

1. Metro bundler starts on `localhost:8081`
2. Expo creates a secure tunnel to their servers
3. You get a public URL that tunnels to your local dev server
4. Scan the QR code with Expo Go app on your device

### Connection Status

When successful, you'll see:
```
✓ Tunnel connected
✓ Tunnel ready
✓ Waiting on http://localhost:8081
```

### Troubleshooting

**Port already in use:**
```bash
# Kill process on port 8081
lsof -ti:8081 | xargs kill -9

# Then restart
yarn start:tunnel
```

**Tunnel connection issues:**
```bash
# Clear cache and restart
npx expo start --tunnel --clear
```

**Firewall blocking tunnel:**
- Ensure ports 19000-19001 are not blocked
- Check that you can reach Expo's tunnel servers

### Using the Tunnel

1. Open Expo Go app on your iOS/Android device
2. Scan the QR code displayed in the terminal
3. The app will connect through the tunnel
4. Changes will hot-reload automatically

### Performance Note

Tunnel mode adds latency compared to LAN connection since traffic routes through Expo's servers. For local development on the same network, use `yarn start` (LAN mode) instead.
