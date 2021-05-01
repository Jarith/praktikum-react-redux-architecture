import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import List from '../';

import { mockStore } from 'mocks/store';

const mockFetchTickets = jest.fn(
    () =>
        function thunk() {
            return () => null;
        }
);

jest.mock('thunks/collections/tickets', () => ({
    fetchTickets: (...args) => mockFetchTickets(...args),
}));

jest.mock(
    '../../Ticket',
    () =>
        function Ticket() {
            return null;
        }
);

describe('<List />', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        mockFetchTickets.mockClear();

        store = mockStore({
            widgets: {
                tickets: {
                    items: [1, 2, 3],
                    loading: false,
                },
            },
        });

        wrapper = mount(
            <Provider store={store}>
                <List />
            </Provider>
        );
    });

    describe('Рендерит необходимое количество компонентов <Ticket />, если', () => {
        it('данные загружены', () => {
            expect(wrapper.find('List').find('Ticket')).toHaveLength(3);
        });
    });

    describe('Рендерит <Loader />, если', () => {
        it('идет загрузка данных', () => {
            store = mockStore({
                widgets: {
                    tickets: {
                        loading: true,
                    },
                },
            });

            wrapper = mount(
                <Provider store={store}>
                    <List />
                </Provider>
            );

            expect(wrapper.find('List').find('Loader')).toHaveLength(1);
        });
    });

    it('Вызывает thunk для загрузки данных только один раз', () => {
        wrapper.setProps({mock: true});

        expect(mockFetchTickets).toHaveBeenCalledTimes(1);
    });
});
