import React, { Fragment } from 'react';

import Header from 'components/Layout/Header';
import List from './List';

import css from './Tickets.module.css';

export const Tickets = () => (
    <Fragment>
        <Header />
        <main>
            <div className={css.container}>
                <div className={css['main-content-wrapper']}>
                    <List />
                </div>
            </div>
        </main>
    </Fragment>
);
