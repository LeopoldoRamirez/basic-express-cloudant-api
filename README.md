## 1) create node project
# $ npm i -y

## 2) install project dependencies
## express
## morgan
## dotenv
## cors
## cloudant : @cloudant/cloudant


## 3) install development dependencies


## create docker image buster
# $ docker build -t  ms01-buster  .

## run our docker buster image
# $ docker run -d --name ms01 -p 8080:3000 ms01-buster

## create docker image alpine
# $ docker build -t ms01-alpine .

## run our docker alpine image
# $ docker run -d --name ms01.1 -p 8081:3000 ms01-alpine


