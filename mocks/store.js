import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = (state = {}) => configureMockStore([thunkMiddleware])(state);
