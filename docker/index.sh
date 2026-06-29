#!/bin/sh
set -e

export SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
export DOCKER_DIR="$(pwd)/docker"
export USER_DIR="/home/node"

if [ ! -d "$USER_DIR" ]; then
    mkdir -p "$USER_DIR"
    echo "Created directory: $USER_DIR"
else
    echo "Directory already exists: $USER_DIR"
fi

# Copy boot file
cp "$DOCKER_DIR/initial.sh" "$USER_DIR/initial.sh"
chmod +x "$USER_DIR/initial.sh"

exec "$USER_DIR/initial.sh"