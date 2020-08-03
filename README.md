## More information
# https://cloud.ibm.com/docs/node?topic=node-cloudant#test-cloudant

## 1) create node project
# $ npm i -y

## 2) install project dependencies
## express
## morgan
## dotenv
## cors
## cloudant : @cloudant/cloudant


## 3) install development dependencies
## nodemon:

## create docker image buster
# $ docker build -t  cloudant-api-buster  .

## run our docker buster image
# 
$ docker run -d --name api01 -p 8080:3000 \   
   -e APPLICATION_PORT=[YOUR_PORT] \
   -e CLOUDANT_URL=[YOU_CLOUDANT_URL] \   
   -e CLOUDANT_API_KEY=[YOUR_API_KEY] \   
   -e CLOUDANT_DATABASE=[YOUR_CLOUDANT_DATABASE] \
   cloudant-api-buster

## create docker image alpine
# $ docker build -t cloudant-api-alpine .

## run our docker alpine image
# 
$ docker run -d --name api01.1 -p 8081:3000 
  -e APPLICATION_PORT=[YOUR_PORT] \
  -e CLOUDANT_URL=[YOU_CLOUDANT_URL] \   
  -e CLOUDANT_API_KEY=[YOUR_API_KEY] \   
  -e CLOUDANT_DATABASE=[YOUR_CLOUDANT_DATABASE] \
  cloudant-api-alpine


