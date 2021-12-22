##################################################
FROM node:latest as node
WORKDIR /app
COPY package.json package-lock.json./
RUN npm install 
COPY . .
RUN npm run prod 