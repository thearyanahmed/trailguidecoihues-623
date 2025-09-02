#!/bin/bash

# Production deployment script
# Build the app and start the production server

echo "🔨 Building production app..."
npm run build

echo "🚀 Starting production server..."
npx serve dist -s -p ${PORT:-3000}

echo "✅ Production server started on port ${PORT:-3000}"