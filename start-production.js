#!/usr/bin/env node

/**
 * Production server script
 * This script serves the built static files for production deployment
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const serve = require('serve');
const path = require('path');

const port = process.env.PORT || 3000;
const distPath = path.join(process.cwd(), 'dist');

console.log(`🚀 Starting production server on port ${port}...`);
console.log(`📁 Serving files from: ${distPath}`);

const server = serve(distPath, {
  port,
  single: true, // Enable SPA mode for React Router
  cors: true,
});

console.log(`✅ Server running at http://localhost:${port}`);