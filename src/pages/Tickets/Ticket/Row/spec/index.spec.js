import React from 'react';
import { Row } from '../';
import { mount } from 'enzyme';

describe('<Row />', () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            origin: 'origin',
            destination: 'destination',
            startTime: 'startTime',
            endTime: 'endTime',
            duration: 100500,
            stops: 'stops',
            stopsCount: 100500,
        };

        wrapper = mount(<Row {...props} />);
    });

    it('Рендерится корректно', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
