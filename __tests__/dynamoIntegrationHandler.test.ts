import { awsConfig } from '../src/dynamoTools/appVariables';
import { upsertCat, getCarsById, deleteCar } from '../src/dynamoTools/lib';

const car1 = { id: '123' }

describe('', () => {
    beforeAll(async (done) => {
        await upsertCat(car1);
        done();
    })

    test('', async (done) => {
        console.log(awsConfig);
        const result = await getCarsById('123');
        console.log('Result: ', result);
        expect(true).toBe(true);
        done();
    });

    afterAll(async (done) => {
        await deleteCar(car1.id);
        done();
    });
});