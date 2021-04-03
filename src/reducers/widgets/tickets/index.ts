import type { TicketId } from 'entities/tickets';
import { Action } from 'actions';
import { ResolveTicketsResult } from 'app/resolvers/tickets';
import {
    FETCH_TICKETS,
    FETCH_TICKETS_FAILED,
    FETCH_TICKETS_FULFILLED,
} from 'actions/tickets';

export type Tickets = {
    loading: boolean;
    items: TicketId[];
};

const initialState = {
    loading: false,
    items: [],
};

export const tickets = (
    state: Tickets = initialState,
    action: Action<ResolveTicketsResult>
) => {
    switch (action?.type) {
        case FETCH_TICKETS: {
            state.loading = true;

            return state;
        }
        case FETCH_TICKETS_FULFILLED: {
            state.loading = false;
            state.items = action?.payload.result;

            return state;
        }
        case FETCH_TICKETS_FAILED: {
            state.loading = false;

            return state;
        }
    }

    return state;
};
