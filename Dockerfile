FROM node:8

RUN mkdir /home/dynamo-int-testing

WORKDIR /home/dynamo-int-testing

COPY . .

RUN npm install

RUN npm run build

RUN chmod -R 777 /home/dynamo-int-testing/

