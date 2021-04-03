import type { Ticket } from 'entities/tickets';
import type { Action } from 'actions';
import type { ResolveTicketsResult } from 'app/resolvers/tickets';
import { FETCH_TICKETS_FULFILLED } from 'actions/tickets';

export type Tickets = {
    [id: string]: Ticket;
};

export const tickets = (
    state: Tickets = {},
    action: Action<ResolveTicketsResult>
) => {
    switch (action.type) {
        case FETCH_TICKETS_FULFILLED: {
            return action.payload.entities.tickets;
        }
    }

    return state;
};
