import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Tickets } from 'pages/Tickets';

import { createApp } from 'store';

import './global.css';

const initialState = (window as any).__INITIAL_STATE__ || {};

const { store } = createApp(initialState);

const App = () => (
    <Provider store={store}>
        <Tickets />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
