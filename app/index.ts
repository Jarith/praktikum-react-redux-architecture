import type { AxiosError } from 'axios';
import axios from 'axios';

const host = 'https://front-test.beta.aviasales.ru';

type ApiMethod = 'search' | 'tickets';
type Param = string | string[] | number | number[];

export type ErrorType = AxiosError;

export function get<R>(
    apiMethod: ApiMethod,
    params: Record<string, Param> = {}
): Promise<R> {
    return axios
        .get<R>(`${host}/${apiMethod}`, { params })
        .then(({ data }) => data);
}
