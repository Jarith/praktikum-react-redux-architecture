import React from 'react';
import type {Segment} from 'entities/tickets';

import css from './Row.module.css';

type Props = Segment;

export const Row = ({
    origin,
    destination,
    startTime,
    endTime,
    duration,
    stops,
    stopsCount,
}: Props) => (
    <div className={css.ticket__row}>
        <div className={css.ticket__col}>
            <p className={css.ticket__label}>
                {origin} – {destination}
            </p>
            <p className={css.ticket__value}>
                <time className={css['ticket__start-time']}>{startTime}</time>–
                <time className={css['ticket__end-time']}>{endTime}</time>
            </p>
        </div>
        <div className={css.ticket__col}>
            <p className={css.ticket__label}>В пути</p>
            <p className={css.ticket__value}>{duration}</p>
        </div>
        <div className={css.ticket__col}>
            <p className={css.ticket__label}>{stopsCount}</p>
            <p className={css.ticket__value}>{stops}</p>
        </div>
    </div>
);

export default Row;
