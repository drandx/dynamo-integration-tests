FROM node:8

RUN echo $STAGE

RUN mkdir /home/dynamo-int-testing

WORKDIR /home/dynamo-int-testing

COPY . .

RUN npm install

RUN npm install -g serverless

RUN npm run build

RUN chmod -R 777 /home/dynamo-int-testing/