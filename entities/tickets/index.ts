import { schema } from 'normalizr';

import {
    convertMinutesToHours,
    formatTicketPrice,
    getEndDate,
    getStopsCount,
    getTimeFromDate,
} from 'app/utils/tickets';

export type RawSegment = {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
};

export type RawTicket = {
    price: number;
    carrier: string;
    segments: Readonly<[RawSegment, RawSegment]>;
};

export type Segment = Readonly<{
    origin: string;
    destination: string;
    startTime: string;
    endTime: string;
    stops: string;
    stopsCount: number;
    duration: number;
}>;

export type TicketId = Branded<string, 'TicketId'>;

export type Ticket = {
    id: TicketId;
    price: number;
    carrier: string;
    segments: Readonly<[Segment, Segment]>;
};

const getSegment = ({ duration, date, stops, ...props }: RawSegment) => {
    const startTime = getTimeFromDate(date);
    const endTime = getEndDate(date, duration);

    return {
        startTime,
        endTime,
        stops: stops.join(', '),
        stopsCount: getStopsCount(stops),
        duration: convertMinutesToHours(duration),
        ...props,
    };
};

export const ticketEntity = new schema.Entity(
    'tickets',
    {},
    {
        idAttribute: ({ price, carrier, segments }) =>
            `${carrier}-${price}-${segments[0].date}`,
        processStrategy: ({ price, carrier, segments }: RawTicket) => ({
            id: `${carrier}-${price}-${segments[0].date}`,
            price: formatTicketPrice(price),
            carrier,
            segments: segments.map(getSegment),
        }),
    }
);

export const ticketsListEntity = new schema.Array(ticketEntity);
