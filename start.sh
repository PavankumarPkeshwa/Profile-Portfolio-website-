#!/bin/bash

echo "🚀 Starting Portfolio Application..."
echo ""

# Check if node_modules exist
if [ ! -d "client/node_modules" ] || [ ! -d "server/node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm run install-all
    echo ""
fi

echo "✅ Starting servers..."
echo "🔧 Backend: http://localhost:5000"
echo "🎨 Frontend: http://localhost:3000"
echo ""

# Start both servers
npm run dev
