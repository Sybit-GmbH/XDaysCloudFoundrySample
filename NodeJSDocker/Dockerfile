FROM node:16-alpine
WORKDIR /usr/src/app
COPY ./package*.json ./server.js ./
RUN npm install
CMD [ "node", "server.js" ]