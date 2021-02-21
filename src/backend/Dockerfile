# Build
FROM node:14.15.4 as builder
WORKDIR /app

COPY . ./
RUN npm install --loglevel=error
RUN npm run build


# Production
FROM node:14.15.4
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["npm", "run", "start"]
