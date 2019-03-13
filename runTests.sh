printenv

echo "Running tests....";

npm run build;

node ./dist/src/config/dbInitializer.js;

echo "Dynamo initialized";

echo "Running tests...";

./node_modules/.bin/jest;