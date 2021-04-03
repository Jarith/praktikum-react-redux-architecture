import { combineReducers } from 'redux-immer';
import produce from 'immer';

import type { Tickets } from './tickets';
import { tickets } from './tickets';

export const widgets = combineReducers(produce, {
    tickets,
});

export type Widgets = {
    tickets: Tickets;
};
