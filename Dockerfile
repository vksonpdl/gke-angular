FROM node:alpine3.14 As builder

WORKDIR /src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build 

FROM nginx:1.15.8-alpine
COPY --from=builder /src/app/dist/gke-angular/ /usr/share/nginx/html

EXPOSE 8080