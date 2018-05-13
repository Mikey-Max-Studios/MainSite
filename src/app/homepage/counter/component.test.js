import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import CounterComponent from './component';

const initialState = {
    counter: {
        value: 0
    }
};

const mockActions = (spy) => (
    {
        increase: () => spy(),
        decrease: () => spy()
    }
);

describe('Counter Component Tests', () => {
    const mockStore = configureStore();

    let container, store, spy;
    beforeEach(() => {
        store = mockStore(initialState);
        spy = sinon.spy();

        container = shallow(
            <CounterComponent
                counter={store}
                actions={mockActions(spy)}
            />
        );
    });

    it('renders the component', () => {
        expect(container.length).toEqual(1);
    });

    it('expects click on increase button', () => {
        container.find('button').at(0).simulate('click');
        expect(spy.calledOnce).toEqual(true);
    });

    it('expects click on decrease button', () => {
        container.find('button').at(1).simulate('click');
        expect(spy.calledOnce).toEqual(true);
    });
});
