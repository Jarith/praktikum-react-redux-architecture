import type { ResolveTicketsResult } from 'app/resolvers/tickets';
import type { ErrorType } from 'app';

export const FETCH_TICKETS = 'tickets/FETCH';
export const FETCH_TICKETS_FULFILLED = 'tickets/FETCH_FULFILLED';
export const FETCH_TICKETS_FAILED = 'tickets/FETCH_FAILED';

export const fetch = () => ({
    type: FETCH_TICKETS,
});

export const fetchFulfilled = (payload: ResolveTicketsResult) => ({
    type: FETCH_TICKETS_FULFILLED,
    payload,
});

export const fetchFailed = (payload: ErrorType) => ({
    type: FETCH_TICKETS_FAILED,
    payload,
});
