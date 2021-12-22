FROM node:current-alpine3.14 As builder

WORKDIR /src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build 

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/SampleApp/ /usr/share/nginx/html