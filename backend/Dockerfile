FROM node:16.9.0

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index","nodemon" ]