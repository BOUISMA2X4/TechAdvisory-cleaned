# Étape 1 : Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et fichiers de lock
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Copier le dossier prisma avant npm install (important pour prisma generate)
COPY prisma ./prisma

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire le projet (next build)
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copier uniquement ce dont on a besoin depuis le builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
