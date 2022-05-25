#!/usr/bin/env bash

set -e

echo "Installing yarn packages..."
yarn install

echo "Installing Cocoa pods..."
cd ./ios
pod install
cd -
