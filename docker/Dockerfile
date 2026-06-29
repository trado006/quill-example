# Stage 1: build
FROM node:20-alpine

# Cài supervisor
RUN apk add --no-cache supervisor bash

# ARG UID=1000
# ARG GID=1000
# RUN addgroup -g ${GID} -S app && adduser -u ${UID} -S -G app app

# Copy config supervisor
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# Copy config supervisor
# COPY supervisord.conf /etc/supervisord.conf

# Copy boot file
COPY index.sh /index.sh
RUN chmod +x /index.sh

# RUN mkdir -p /home/app

# Switch to non-root user
USER node

# Copy app
WORKDIR /app

EXPOSE 3000 9000 9080

ENTRYPOINT ["/index.sh"]