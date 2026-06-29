#!/bin/sh
set -e

# Copy config supervisor
cp "$DOCKER_DIR/setup.sh" "$USER_DIR/setup.sh"
chmod +x "$USER_DIR/setup.sh"

# Copy config supervisor
cp "$DOCKER_DIR/supervisord.conf" "$USER_DIR/supervisord.conf"

# sed -i 's/^node:x:1000:1000:/node:x:1001:1001:/' /etc/passwd && \
# sed -i 's/^node:x:1000:/node:x:1001:/' /etc/group

# addgroup -g 1000 -S app && adduser -u 1000 -S -G app app

sh "$USER_DIR/setup.sh"

exec supervisord -c "$USER_DIR/supervisord.conf"