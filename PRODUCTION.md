# Production Deployment

## Running the Node.js App

Your app is ready to serve as a Node.js application. Use these npm commands:

### Development
```bash
npm run dev
```

### Production Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   node server.js
   ```

3. **One-command deployment:**
   ```bash
   npm run build && node server.js
   ```

The server will start on port 3000 by default, or use the PORT environment variable if set.

## Environment Variables

- `PORT`: Set the port number (default: 3000)

Example:
```bash
PORT=8080 node server.js
```

## Server Commands

```bash
# Build and start in one command
npm run build && node server.js

# With custom port
PORT=8080 npm run build && PORT=8080 node server.js

# Start only (assumes build already exists)
node server.js
```

## What's Included

- ✅ Express.js server (`server.js`)
- ✅ Static file serving from `dist/` folder
- ✅ Client-side routing support (SPA)
- ✅ Environment variable support for PORT
- ✅ ES modules support