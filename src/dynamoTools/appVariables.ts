const accessKeyId = process.env.AWS_API_ACCESS_KEY;
const secretAccessKey = process.env.AWS_API_SECRET_KEY;
const awsRegion = process.env.AWS_API_REGION;
const appStage = global.__TEST__ !== undefined ? global.__TEST__ : process.env.STAGE;

export let awsConfig = {
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: awsRegion
};

if (global.__TEST__) {
  awsConfig = {... awsConfig, ...{endpoint: process.env.DB_END_POINT}}
}

export const globalConst = {
  stage: appStage
}
