# Production Deployment

## Running the Node.js App

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   node server.js
   ```

The server will start on port 3000 by default, or use the PORT environment variable if set.

## Environment Variables

- `PORT`: Set the port number (default: 3000)

Example:
```bash
PORT=8080 node server.js
```

## Production Commands

```bash
# Build and start
npm run build && node server.js

# With custom port
PORT=8080 npm run build && PORT=8080 node server.js
```