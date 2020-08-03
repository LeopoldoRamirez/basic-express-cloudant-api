# TO USE IN CLOUD
#FROM node:10-alpine

# TO USE IN DEV
FROM node:10-buster

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm" , "run", "start"  ]