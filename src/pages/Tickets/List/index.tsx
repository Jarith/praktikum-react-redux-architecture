import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import type { State } from 'reducers';
import type { TicketId } from 'entities/tickets';

import { getIsLoading, getTickets } from 'selectors/widgets/tickets';
import { fetchTickets } from 'thunks/collections/tickets';
import Ticket from '../Ticket';

import css from './List.module.css';

type Props = {
    tickets: TicketId[];
    isLoading: boolean;
    fetchTicketsThunk: () => void;
};

export const List = ({ tickets, isLoading, fetchTicketsThunk }: Props) => {
    useEffect(() => {
        fetchTicketsThunk();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className={css.tickets}>
            <div className={css['tickets__wrapper']}>
                {tickets.map((ticketId) => (
                    <Ticket key={ticketId} id={ticketId} />
                ))}
            </div>
        </section>
    );
};

const mapStateToProps = (state: State) => ({
    tickets: getTickets(state),
    isLoading: getIsLoading(state),
});

export default connect(mapStateToProps, { fetchTicketsThunk: fetchTickets })(
    List
);
