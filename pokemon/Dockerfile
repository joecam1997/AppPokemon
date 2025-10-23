# Etapa 1: Construcción de la app
FROM node:20-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración y dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Etapa 2: Servir la app optimizada
FROM node:20-alpine AS runner

WORKDIR /app

# Establecer el entorno de producción
ENV NODE_ENV=production

# Copiar los archivos necesarios desde el builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Instalar solo dependencias de producción
RUN npm install --omit=dev

# Exponer el puerto donde correrá la app
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]
