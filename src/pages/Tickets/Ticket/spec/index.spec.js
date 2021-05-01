import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Ticket from '../';

import { mockStore } from 'mocks/store';

jest.mock('../Row', () => ({
    Row() {
        return null;
    },
}));

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
    let wrapper;

    beforeEach(() => {
        store = mockStore({
            collections: {
                tickets: {
                    [id]: ticket,
                },
            },
        });

        wrapper = mount(
            <Provider store={store}>
                <Ticket id={id} />
            </Provider>
        );
    });

    it('Рендерится корректно', () => {
        expect(wrapper.find('Ticket').props().ticket).toEqual(ticket);
    });

    it('Рендерит <Row /> для каждого сегмента', () => {
        expect(wrapper.find('Row')).toHaveLength(2);
    });
});
