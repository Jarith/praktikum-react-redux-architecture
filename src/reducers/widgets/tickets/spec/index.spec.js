import { tickets } from '../';
import { fetchFulfilled, fetch, fetchFailed } from 'actions/tickets';

describe('Редьюсер tickets при диспатче экшена', () => {
    describe('FETCH_TICKETS', () => {
        it('включает флаг загрузки данных', () => {
            const action = fetch();

            const initialState = {
                loading: false,
            };

            expect(tickets(initialState, action)).toEqual({
                loading: true,
            });
        });
    });

    describe('FETCH_TICKETS_FULFILLED', () => {
        it('выключает флаг загрузки данных и записывает id сущностей в виджет', () => {
            const action = fetchFulfilled({
                result: [1, 2, 3],
            });

            const initialState = {
                loading: true,
                items: [1],
            };

            expect(tickets(initialState, action)).toEqual({
                items: [1, 2, 3],
                loading: false,
            });
        });
    });

    describe('FETCH_TICKETS_FAILED', () => {
        it('выключает флаг загрузки данных', () => {
            const action = fetchFailed({mock: true});

            const initialState = {
                loading: true,
            };

            expect(tickets(initialState, action)).toEqual({
                loading: false,
            });
        });
    });
});
