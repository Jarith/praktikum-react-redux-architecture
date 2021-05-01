import type { Ticket } from 'entities/tickets';
import type { FulfilledAction } from 'actions/tickets';
import { FETCH_TICKETS_FULFILLED } from 'actions/tickets';

export type Tickets = {
    [id: string]: Ticket;
};

export const tickets = (
    state: Tickets = {},
    action: FulfilledAction,
) => {
    switch (action.type) {
        case FETCH_TICKETS_FULFILLED: {
            state = action.payload.entities.tickets;

            return state;
        }
    }

    return state;
};
