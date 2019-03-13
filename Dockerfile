FROM node:8

RUN mkdir /home/dynamo-int-testing

WORKDIR /home/dynamo-int-testing

COPY . .

RUN npm install

RUN chmod -R 777 .

# CMD ["./dist/src/config/dbInitializer.js", "./node_modules/.bin/jest", "echo test done"]

#  CMD sh -c "while true; do echo hello world; sleep 1; done"