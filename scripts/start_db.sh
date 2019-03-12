docker stop intDynamo
docker run --rm --name intDynamo -d -p 8000:8000 amazon/dynamodb-local
npm run build
node ./dist/src/config/dbInitializer.js
aws dynamodb list-tables --endpoint-url http://localhost:8000