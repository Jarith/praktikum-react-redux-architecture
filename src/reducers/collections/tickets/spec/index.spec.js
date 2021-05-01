import { tickets } from '../';
import { fetchFulfilled } from 'actions/tickets';

describe('Редьюсер tickets при диспатче экшена', () => {
    describe('FETCH_TICKETS_FULFILLED', () => {
        it('перезаписывает данные в коллекции', () => {
            const action = fetchFulfilled({
                entities: {
                    tickets: {
                        1: {
                            id: 1,
                            price: 100500,
                        },
                    },
                },
            });

            const initialState = {
                1: {
                    id: 1,
                    carrier: 'carrier',
                },
            };

            expect(tickets(initialState, action)).toEqual({
                1: {
                    id: 1,
                    price: 100500,
                },
            });
        });
    });
});
