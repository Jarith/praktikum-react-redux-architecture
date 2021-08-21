import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import type { State } from 'reducers';
import { rootSaga } from 'sagas';
import { rootReducer } from 'reducers';

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const createApp = (initialState: State) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, logger))
    );

    sagaMiddleware.run(rootSaga);

    return { store };
};
