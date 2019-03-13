import * as AWS from 'aws-sdk';
import { awsConfig } from './appVariables';

console.log('awsConfig: ', awsConfig);

export const connection = new AWS.DynamoDB.DocumentClient(awsConfig);