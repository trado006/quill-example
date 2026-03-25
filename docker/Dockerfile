# Stage 1: build
FROM node:20-alpine

# Cài supervisor
RUN apk add --no-cache supervisor bash

# Copy config supervisor
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy config supervisor
COPY supervisord.conf /etc/supervisord.conf

# Copy app
WORKDIR /app

EXPOSE 3000
EXPOSE 9000
EXPOSE 9080

ENTRYPOINT ["/entrypoint.sh"]
CMD ["supervisord", "-c", "/etc/supervisord.conf"]