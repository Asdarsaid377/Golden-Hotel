FROM node
WORKDIR /backend
COPY packa*.json ./
RUN npm add -g nodemon
RUN npm install
COPY . .
CMD nodemon index