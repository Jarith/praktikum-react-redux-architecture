import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react'
import Ticket from '../';

import { mockStore } from 'mocks/store';

const id = 1;
const segment = { mock: true };
const ticket = {
    id,
    price: 100500,
    carrier: 'carrier',
    segments: [segment, segment],
}

describe('<Ticket />', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            collections: {
                tickets: {
                    [id]: ticket,
                },
            },
        });

        render(
            <Provider store={store}>
                <Ticket id={id} />
            </Provider>
        );
    });

    it('Рендерится корректно', () => {
        expect(screen.getByText(/^\d+\sР$/)).toHaveTextContent('100500 Р');
        expect(screen.getByAltText('carrier')).toBeVisible();
        expect(screen.getAllByLabelText('Segment')).toHaveLength(2);
    });
});
