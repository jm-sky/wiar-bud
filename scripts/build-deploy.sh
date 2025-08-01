#!/bin/bash

# Build and deploy script for dev-made-it
set -e

echo "Starting build and deploy process..."

echo "1. Pulling latest changes from git..."
git pull

echo "2. Installing dependencies with pnpm..."
pnpm install

echo "3. Generating static site with pnpm..."
pnpm generate

echo "4. Running finalization script..."
sudo finalize-wiarbud.sh

echo "Build and deploy completed successfully!"
