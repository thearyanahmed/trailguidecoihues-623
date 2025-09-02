# Production Deployment Guide

## Quick Start

### Option 1: Using the shell script (Recommended)
```bash
chmod +x start-prod.sh
./start-prod.sh
```

### Option 2: Manual commands
```bash
# Build the production app
npm run build

# Serve the built files
npx serve dist -s -p 3000
```

### Option 3: Add to package.json scripts
Add this line to your package.json scripts section:
```json
"start": "serve dist -s -p 3000"
```

Then run:
```bash
npm run build
npm start
```

## Environment Variables

- `PORT`: Set the server port (default: 3000)
  ```bash
  PORT=8080 ./start-prod.sh
  ```

## Production Server Requirements

1. Node.js (v16 or higher)
2. The `serve` package (already installed)
3. Built files in `dist/` directory

## Deployment Steps

1. Clone your repository on the server
2. Install dependencies: `npm install`
3. Build the app: `npm run build`
4. Start the server: `npx serve dist -s -p 3000`

## Process Management

For production, consider using PM2 or similar process managers:

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start "npx serve dist -s -p 3000" --name "your-app"

# Save PM2 config
pm2 save
pm2 startup
```