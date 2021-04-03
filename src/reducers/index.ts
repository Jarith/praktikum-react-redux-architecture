import type { Immutable } from 'immer';
import { combineReducers } from 'redux';

import type { Collections } from './collections';
import type { Widgets } from './widgets';
import { collections } from './collections';
import { widgets } from './widgets';

export type State = Immutable<{
    widgets: Widgets;
    collections: Collections;
}>;

export const rootReducer = combineReducers({
    collections,
    widgets,
});
