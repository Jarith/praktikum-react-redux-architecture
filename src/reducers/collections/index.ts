import { combineReducers } from 'redux-immer';
import produce from 'immer';

import type { Tickets } from './tickets';
import { tickets } from './tickets';

export type Collections = {
    tickets: Tickets;
};

export const collections = combineReducers(produce, {
    tickets,
});
