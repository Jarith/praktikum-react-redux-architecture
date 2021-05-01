import { getTickets } from '../';

describe('Селектор getTickets', () => {
    it('возвращает массив значений из коллекции', () => {
        const collection = {
            1: {
                id: 1,
                price: 10,
            },
            2: {
                id: 2,
                price: 20,
            },
        };

        expect(getTickets.resultFunc(collection)).toEqual([
            {
                id: 1,
                price: 10,
            },
            {
                id: 2,
                price: 20,
            },
        ]);
    });
});
