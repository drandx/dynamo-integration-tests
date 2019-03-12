import * as AWS from 'aws-sdk';
import { awsConfig } from './appVariables';

export const connection = new AWS.DynamoDB.DocumentClient(awsConfig);