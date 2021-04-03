import type {State} from 'reducers';

export const getTicketsWidget = (state: State) => state.widgets.tickets;

export const getTickets = (state: State) => getTicketsWidget(state).items;

export const getIsLoading = (state: State) => getTicketsWidget(state).loading;
