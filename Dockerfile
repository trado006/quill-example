# Stage 1: Install dependencies and build
FROM node:20-slim AS builder
WORKDIR /app

# Copy package files and lockfile for deterministic install
COPY package.json package-lock.json ./
COPY packages/quill/package.json ./packages/quill/
COPY packages/website/package.json ./packages/website/

# Install dependencies for monorepo
RUN npm ci

# Copy the rest of the source
COPY . .

# Build both packages (quill library + website)
RUN npm run build


# Stage 2: Serve the website (production)
FROM node:20-slim AS runner
WORKDIR /app

# Copy production build outputs from builder
COPY --from=builder /app/packages/website .

# Install only prod deps for website
RUN npm ci --omit=dev

# Expose default website port
EXPOSE 9000

# Run website in production mode (Next.js)
CMD ["npm", "run", "start", "--", "-p", "9000"]
