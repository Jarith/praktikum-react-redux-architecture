import type { ResolveTicketsResult } from 'app/resolvers/tickets';
import type { ErrorType } from 'app';
import type { Action } from 'actions';

export const FETCH_TICKETS = 'tickets/FETCH';
export const FETCH_TICKETS_FULFILLED = 'tickets/FETCH_FULFILLED';
export const FETCH_TICKETS_FAILED = 'tickets/FETCH_FAILED';

export type FetchAction = Action<typeof FETCH_TICKETS>;
export type FulfilledAction = Action<typeof FETCH_TICKETS_FULFILLED, ResolveTicketsResult>;
export type FailedAction = Action<typeof FETCH_TICKETS_FAILED, ErrorType>;

export const fetch = () => ({
    type: FETCH_TICKETS,
} as FetchAction);

export const fetchFulfilled = (payload: ResolveTicketsResult) => ({
    type: FETCH_TICKETS_FULFILLED,
    payload,
} as FulfilledAction);

export const fetchFailed = (payload: ErrorType) => ({
    type: FETCH_TICKETS_FAILED,
    payload,
} as FailedAction);
