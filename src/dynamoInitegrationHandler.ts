export function dynamoInitegrationHandler(
    event: any,
    context: any,
    callback: (err: any, res: any) => any) {
    console.log('Event', event);
    console.log('Context', context);
    callback({}, {});

    const response: any = buildResponse(200, {});
    console.log('Response: ', response);
    callback(null, response)
}

export const buildResponse = (statusCode: number, body: any): any => {
    const response = {
        statusCode: statusCode,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(body)
    };
    return response;
}