import type { Dispatch } from 'redux';
import { resolveTickets } from 'app/resolvers/tickets';
import { fetch, fetchFailed, fetchFulfilled } from 'actions/tickets';

export const fetchTickets = () => (dispatch: Dispatch) => {
    dispatch(fetch());

    return resolveTickets()
        .then((res) => dispatch(fetchFulfilled(res)))
        .catch((err) => dispatch(fetchFailed(err)));
};
