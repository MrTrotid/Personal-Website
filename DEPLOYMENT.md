# Deployment Guide

## Prerequisites

- Node.js version 20.9.0 or higher
- npm or pnpm package manager
- Cloudflare account with Pages enabled
- Git repository connected to Cloudflare

## Local Setup

```bash
# Install Node.js 20.9.0 (if using nvm)
nvm install 20.9.0
nvm use 20.9.0

# Install dependencies
npm install

# Build locally to test
npm run build
```

## Cloudflare Pages Setup

1. Log in to Cloudflare Dashboard
2. Navigate to Pages > Create a project
3. Connect your GitHub repository
4. Configure build settings:
   ```yaml
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: dist
   Root directory setting: /
   Node.js version: 20.x
   ```
5. Add environment variables:
   ```yaml
   NEXT_TELEMETRY_DISABLED: 1
   NODE_VERSION: 20.9.0
   ```

## Build Process

The build process will:
1. Clean previous builds (dist and .next folders)
2. Generate static export
3. Place files in the `dist` directory
4. Optimize assets for deployment

## DNS Configuration

1. Go to DNS settings in Cloudflare
2. Add new records:
   ```yaml
   Type: CNAME
   Name: @
   Target: <your-project>.pages.dev
   Proxy: Yes (orange cloud)
   ```
3. Add www subdomain:
   ```yaml
   Type: CNAME
   Name: www
   Target: <your-project>.pages.dev
   Proxy: Yes (orange cloud)
   ```

## Common Issues & Solutions

### Build Failures
- Error: Directory not empty
  ```bash
  # Solution: Clean manually
  rm -rf dist .next
  npm run build
  ```

- Error: Node.js version mismatch
  ```bash
  # Solution: Use correct version
  nvm use 20.9.0
  ```

### Asset Loading Issues
- Check image paths are relative
- Verify public directory structure
- Ensure custom image loader is working

## Maintenance

- Regular updates:
  ```bash
  npm update
  npm audit fix
  ```
- Monitor Cloudflare logs for issues
- Keep Node.js version updated
