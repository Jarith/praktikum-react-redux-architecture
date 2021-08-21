import { all, fork } from 'redux-saga/effects';
import { ticketsSaga } from './collections/tickets';

export function* rootSaga() {
    yield all([fork(ticketsSaga)]);
}
