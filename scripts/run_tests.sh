docker-compose stop
docker-compose up
npm run build
node ./dist/src/config/dbInitializer.js
aws dynamodb list-tables --endpoint-url http://localhost:8000