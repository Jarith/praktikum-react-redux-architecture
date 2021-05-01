import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react'
import List from '../';

import { mockStore } from 'mocks/store';

jest.mock(
    '../../Ticket',
    () =>
        function Ticket() {
            return <div aria-label="Ticket" />;
        }
);

describe('<List />', () => {
    let store;
    let renderResult;

    beforeEach(() => {
        store = mockStore({
            widgets: {
                tickets: {
                    items: [1, 2, 3],
                    loading: false,
                },
            },
        });

        renderResult = render(
            <Provider store={store}>
                <List />
            </Provider>
        );
    });

    describe('Рендерит необходимое количество компонентов <Ticket />, если', () => {
        it('данные загружены', () => {
            expect(screen.getAllByLabelText('Ticket')).toHaveLength(3);
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

            render(
                <Provider store={store}>
                    <List />
                </Provider>
            );

            expect(screen.getByLabelText('Loader')).toHaveTextContent('Loading...');
        });
    });

    it('Диспатчит экшн для загрузки данных только один раз', () => {
        expect(store.getActions()).toEqual([{ type: 'tickets/FETCH' }]);

        renderResult.rerender(
            <Provider store={store}>
                <List />
            </Provider>
        );

        expect(store.getActions()).toEqual([{ type: 'tickets/FETCH' }]);
    });
});
