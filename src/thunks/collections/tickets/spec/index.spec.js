import {fetchTickets} from '../';

import {mockStore} from 'mocks/store';

const mockResolveTickets = jest.fn();

jest.mock('app/resolvers/tickets', () => ({
    resolveTickets: (...args) => mockResolveTickets(...args),
}));

describe('Thunk fetchTickets', () => {
    let store;

    beforeEach(() => {
        mockResolveTickets.mockReset();

        store = mockStore({});
    });

    it('диспатчит экшн ожидания загрузки данных FETCH_TICKETS', () => {
        mockResolveTickets.mockReturnValue(new Promise(() => null));
        store.dispatch(fetchTickets());

        expect(store.getActions()).toEqual([{
            type: 'tickets/FETCH',
        }]);
    });

    describe('Вызывает резолвер resolveTickets и обрабатывает', () => {
        it('успешный ответ', async () => {
            mockResolveTickets.mockReturnValue(Promise.resolve({mock: true}));
            await store.dispatch(fetchTickets());

            expect(mockResolveTickets).toHaveBeenCalledTimes(1);

            expect(store.getActions()).toHaveLength(2);
            expect(store.getActions()[1]).toEqual({
                type: 'tickets/FETCH_FULFILLED',
                payload: {mock: true},
            });
        });

        it('ошибку', async () => {
            mockResolveTickets.mockReturnValue(Promise.reject({mock: true}));
            await store.dispatch(fetchTickets());

            expect(mockResolveTickets).toHaveBeenCalledTimes(1);

            expect(store.getActions()).toHaveLength(2);
            expect(store.getActions()[1]).toEqual({
                type: 'tickets/FETCH_FAILED',
                payload: {mock: true},
            });
        });
    })
});
