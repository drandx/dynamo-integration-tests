import * as AWS from 'aws-sdk';

export const dynamoConnection = new AWS.DynamoDB({
    endpoint: process.env.DB_END_POINT,
    region: process.env.AWS_API_REGION,
    accessKeyId: process.env.AWS_API_ACCESS_KEY,
    secretAccessKey: process.env.AWS_API_SECRET_KEY,
});

var params = {
    TableName : `${process.env.STAGE}_Cars`,
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamoConnection.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});