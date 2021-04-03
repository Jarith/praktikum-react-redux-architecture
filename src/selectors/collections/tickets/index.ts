import { createSelector, Selector } from 'reselect';
import type { State } from 'reducers';
import type { Ticket, TicketId } from 'entities/tickets';

export const getTicketsCollection = (state: State) => state.collections.tickets;

export const getTicketById = (state: State, id: TicketId) =>
    getTicketsCollection(state)[id];

export const getTickets: Selector<
    State,
    Ticket[]
> = createSelector(getTicketsCollection, (collection) =>
    Object.values(collection)
);
