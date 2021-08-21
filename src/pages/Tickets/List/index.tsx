import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import type { State } from 'reducers';
import type { TicketId } from 'entities/tickets';

import { Loader } from 'components/Loader';
import { getIsLoading, getTickets } from 'selectors/widgets/tickets';
import { fetch } from 'actions/tickets';
import Ticket from '../Ticket';

import css from './List.module.css';

type Props = {
    tickets: TicketId[];
    isLoading: boolean;
    fetchTickets: typeof fetch;
};

export const List = ({ tickets, isLoading, fetchTickets }: Props) => {
    useEffect(() => {
        fetchTickets();
    }, [fetchTickets]);

    if (isLoading) {
        return <Loader />;
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

export default connect(mapStateToProps, { fetchTickets: fetch })(
    List
);
