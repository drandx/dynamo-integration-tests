export function dynamoInitegrationHandler(
    event: any,
    context: any,
    callback: (err: any, res: any) => any) {
        console.log('Event', event);
        console.log('Context', context);
        callback({}, {});

}