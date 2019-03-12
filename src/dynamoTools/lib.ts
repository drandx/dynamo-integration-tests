import { tables } from '../common/constants';
import { connection } from './config';

export function upsertCat(car: any) {
    const params = {
        TableName: tables.cars,
        Item: car,
        ReturnValues: 'NONE'
    };
    return new Promise((resolve, reject) => {
        connection.put(params, (error) => {
            if (error) {
                const err = { code: 500, message: 'ERROR UPSERTING CAR', detail: error };
                console.log({ err });
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}

export function getCarsById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: tables.cars,
            KeyConditionExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id
            }
        };
        connection.query(params, (error, result) => {
            if (error) {
                reject({ code: 500, message: 'ERROR GETTING CAR BY ID', detail: error });
            }
            else {
                resolve(result.Items[0]);
            }
        });
    });
}

export function deleteCar(id: string) {
    const params = {
        TableName: tables.cars,
        Key: {
            "id": id
        }
    };
    return new Promise((resolve, reject) => {
        connection.delete(params, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}