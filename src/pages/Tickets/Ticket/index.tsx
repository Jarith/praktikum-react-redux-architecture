import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import type { State } from 'reducers';
import type { Ticket as TicketType, TicketId } from 'entities/tickets';
import { Image } from 'components/Image';
import { Row } from './Row';
import { getTicketById } from 'selectors/collections/tickets';

import css from './Ticket.module.css';

type OwnProps = {
    id: TicketId;
};

type Props = OwnProps & {
    ticket: TicketType,
};

const Ticket = ({ ticket }: Props) => {
    const { id, price, carrier, segments } = ticket;

    return (
        <div className={cn(css.ticket, css.tickets__item)} aria-label="Ticket">
            <div className={css.ticket__wrapper}>
                <p className={css.ticket__price}>{price} Р</p>
                <Image
                    src={`https://pics.avs.io/99/36/${carrier}.png`}
                    alt={carrier}
                    className={css['ticket__avia-logo']}
                />
            </div>
            {segments.map((segment, i) => (
                <Row key={`${id}-segment-${i}`} {...segment} />
            ))}
        </div>
    );
};

const mapStateToProps = (state: State, { id }: OwnProps) => ({
    ticket: getTicketById(state, id),
});

export default connect(mapStateToProps, {})(Ticket);
