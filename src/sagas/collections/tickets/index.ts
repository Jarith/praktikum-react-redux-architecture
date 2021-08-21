import { resolveTickets } from 'app/resolvers/tickets';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetch, fetchFailed, fetchFulfilled } from 'actions/tickets';

export function* fetchTickets() {
    try {
        // @ts-expect-error redux-saga types
        const tickets = yield call(resolveTickets);
        yield put(fetchFulfilled(tickets));
    } catch(e) {
        yield put(fetchFailed(e));
    }
}

export function* ticketsSaga() {
    yield takeLatest(fetch().type, fetchTickets);
}
