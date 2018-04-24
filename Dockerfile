# Dockerfile

FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

# Bundle app source
COPY . .

CMD npm run prod