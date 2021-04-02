import type { RawTicket, Ticket, TicketId } from 'entities/tickets';
import { ticketsListEntity } from 'entities/tickets';
import { normalize } from 'normalizr';
import { get } from '../../';

type Resolver<P, R> = (params: P) => Promise<R>;

export type ResolveSearchIdResult = {
    searchId: string;
};

type SearchIdResponse = {
    searchId: string;
};

export const resolveSearchId: Resolver<void, ResolveSearchIdResult> = () =>
    get<SearchIdResponse>('search');

export type ResolveTicketsResult = {
    entities: {
        [id: string]: Ticket;
    };
    result: TicketId[];
};

type TicketsResponse = {
    tickets: RawTicket[];
    stop: boolean;
};

export const resolveTickets: Resolver<void, ResolveTicketsResult> = () =>
    resolveSearchId()
        .then(({ searchId }) => get<TicketsResponse>('tickets', { searchId }))
        .then(({ tickets }) => normalize(tickets, ticketsListEntity));
